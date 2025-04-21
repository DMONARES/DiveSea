<script setup>
import { useProductsStore } from "@/stores/products";
import { useRouter } from "vue-router";
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
	modelValue: { type: String, required: true },
	placeholder: { type: String, default: "" },
	errorText: { type: String, default: "" },
	error: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "triggerIcon"]);

const focus = ref(false);
const inputRef = ref(null);
const suggestionsRef = ref(null);
const productSuggestions = ref([]);
const userSuggestions = ref([]);
const showSuggestions = ref(false);
const store = useProductsStore();
const router = useRouter();

const focusInput = () => {
	if (inputRef.value) inputRef.value.focus();
};

const updateValue = (value) => {
	emit("update:modelValue", value);

	if (value.trim()) {
		// Поиск товаров
		productSuggestions.value = store.searchProducts(value).slice(0, 3);

		// Поиск пользователей
		// Извлекаем уникальных пользователей из продуктов
		const allProducts = store.getAllProducts
			? store.getAllProducts()
			: store.products || [];
		const users = new Map();
		const searchLower = value.toLowerCase();

		// Создаем набор уже добавленных имен пользователей для избежания дубликатов
		const addedUserNames = new Set();

		allProducts.forEach((product) => {
			// Проверяем nickname на верхнем уровне
			if (
				product.nickname &&
				product.nickname.toLowerCase().includes(searchLower)
			) {
				const userName = product.creatorName || product.ownerName;
				if (!addedUserNames.has(userName)) {
					addedUserNames.add(userName);
					users.set(product.nickname, {
						id: product.id,
						name: userName,
						nickname: product.nickname,
						avatar: product.creatorAva || product.ownerAva,
					});
				}
			}

			// Проверяем имя создателя
			if (
				product.creatorName &&
				product.creatorName.toLowerCase().includes(searchLower)
			) {
				if (!addedUserNames.has(product.creatorName)) {
					addedUserNames.add(product.creatorName);
					const userId =
						product.creatorId || `creator-${product.creatorName}`;
					users.set(userId, {
						id: userId,
						name: product.creatorName,
						nickname:
							product.creatorNickname ||
							product.nickname ||
							product.creatorName
								.replace(/\s+/g, "")
								.toLowerCase(),
						avatar: product.creatorAva,
					});
				}
			}

			// Проверяем имя владельца
			if (
				product.ownerName &&
				product.ownerName.toLowerCase().includes(searchLower)
			) {
				if (!addedUserNames.has(product.ownerName)) {
					addedUserNames.add(product.ownerName);
					const userId =
						product.ownerId || `owner-${product.ownerName}`;
					users.set(userId, {
						id: userId,
						name: product.ownerName,
						nickname:
							product.ownerNickname ||
							product.nickname ||
							product.ownerName.replace(/\s+/g, "").toLowerCase(),
						avatar: product.ownerAva,
					});
				}
			}
		});

		userSuggestions.value = Array.from(users.values()).slice(0, 3);

		// Показываем список, если есть запрос (даже если результаты пустые)
		showSuggestions.value = true;
	} else {
		productSuggestions.value = [];
		userSuggestions.value = [];
		showSuggestions.value = false;
	}
};
const selectProductSuggestion = (product) => {
	showSuggestions.value = false;
	productSuggestions.value = [];
	userSuggestions.value = [];
	router.push(`/product/${product.id}`);
};

const selectUserSuggestion = (user) => {
	showSuggestions.value = false;
	productSuggestions.value = [];
	userSuggestions.value = [];
	router.push(`/profile/${user.id}`);
};

// Обработка нажатия Enter для перехода по первой ссылке
const handleKeyDown = (event) => {
	if (event.key === "Enter" && showSuggestions.value) {
		event.preventDefault(); // Предотвращаем стандартное поведение формы

		// Проверяем, есть ли результаты поиска
		if (productSuggestions.value.length > 0) {
			// Если есть товары, переходим к первому товару
			selectProductSuggestion(productSuggestions.value[0]);
		} else if (userSuggestions.value.length > 0) {
			// Если нет товаров, но есть пользователи, переходим к первому пользователю
			selectUserSuggestion(userSuggestions.value[0]);
		}
	}
};

// Закрытие списка при клике вне элемента
const handleClickOutside = (event) => {
	if (
		inputRef.value &&
		!inputRef.value.contains(event.target) &&
		suggestionsRef.value &&
		!suggestionsRef.value.contains(event.target)
	) {
		showSuggestions.value = false;
	}
};

// Показать список при фокусе, если есть предложения
const handleFocus = () => {
	focus.value = true;
	if (
		productSuggestions.value.length > 0 ||
		userSuggestions.value.length > 0
	) {
		showSuggestions.value = true;
	}
};

// Проверка наличия результатов поиска
const hasResults = computed(() => {
	return (
		productSuggestions.value.length > 0 || userSuggestions.value.length > 0
	);
});

onMounted(() => {
	document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
	document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
	<div
		class="ui-search"
		:class="{
			active: focus || modelValue,
			error: error,
		}"
	>
		<div class="ui-search__wr">
			<button
				type="submit"
				class="ui-search__icon"
				@click="emit('triggerIcon')"
			>
				<IconsSearch />
			</button>
			<input
				class="ui-search__input"
				ref="inputRef"
				type="search"
				:value="modelValue"
				:placeholder="placeholder"
				@focus="handleFocus"
				@blur="focus = false"
				@input="updateValue($event.target.value)"
				@keydown="handleKeyDown"
			/>
		</div>

		<transition name="fade">
			<div
				v-if="showSuggestions && (hasResults || modelValue)"
				class="ui-search__suggestions-container"
				ref="suggestionsRef"
			>
				<!-- Товары -->
				<div
					v-if="productSuggestions.length > 0"
					class="ui-search__category"
				>
					<h3 class="ui-search__category-title">NFT</h3>
					<ul class="ui-search__suggestions">
						<li
							v-for="(product, index) in productSuggestions"
							:key="`product-${index}`"
							class="ui-search__suggestion"
							@click="selectProductSuggestion(product)"
						>
							<div class="ui-search__suggestion-image">
								<img :src="product.nftImage" alt="NFT Image" />
							</div>
							<div class="ui-search__suggestion-text">
								<span class="ui-search__suggestion-name">
									{{ product.nftName }}
								</span>
								<span class="ui-search__suggestion-owner">
									by {{ product.ownerName }}
								</span>
							</div>
						</li>
					</ul>
				</div>

				<!-- Пользователи -->
				<div
					v-if="userSuggestions.length > 0"
					class="ui-search__category"
				>
					<h3 class="ui-search__category-title">Users</h3>
					<ul class="ui-search__suggestions">
						<li
							v-for="(user, index) in userSuggestions"
							:key="`user-${index}`"
							class="ui-search__suggestion"
							@click="selectUserSuggestion(user)"
						>
							<div
								class="ui-search__suggestion-image ui-search__suggestion-image--user"
							>
								<img
									v-if="user.avatar"
									:src="user.avatar"
									alt="User Avatar"
								/>
								<div
									v-else
									class="ui-search__suggestion-image-placeholder"
								>
									{{ user.name.charAt(0) }}
								</div>
							</div>
							<div class="ui-search__suggestion-text">
								<span class="ui-search__suggestion-name">
									{{ user.name }}
								</span>
								<span class="ui-search__suggestion-owner">
									@{{ user.nickname }}
								</span>
							</div>
						</li>
					</ul>
				</div>

				<!-- Сообщение, если ничего не найдено -->
				<div
					v-if="modelValue && !hasResults"
					class="ui-search__no-results"
				>
					No results found for "{{ modelValue }}"
				</div>
			</div>
		</transition>

		<span v-if="errorText" class="ui-search__error-text">
			{{ errorText }}
		</span>
	</div>
</template>

<style lang="scss">
$placeholder: #9596a6;
$inputBg: #efefef;
$suggestionHoverBg: #f9f9f9;
$categoryBg: rgba(240, 240, 240, 0.5);

// Анимация появления и исчезновения
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}

.ui-search {
	width: 350px;
	max-height: 57px;
	position: relative;

	@media (max-width: 1200px) {
		width: 250px;
		max-height: 40px;
	}
	&.active {
		.ui-search__input {
			border-color: $black;
			background-color: transparent;
		}
	}

	&.error {
		.ui-search__input {
			border-color: $red;
		}
	}

	&__wr {
		position: relative;
	}

	&__input {
		// default
		width: 100%;
		max-height: 57px;
		padding: 18px 27px 18px 60px;
		border: 1.5px solid transparent;
		outline: none;
		border-radius: 11px;
		background-color: $inputBg;
		color: $black;
		font-size: 1rem;
		transition: 0.3s ease-in-out;

		@media (max-width: 1200px) {
			padding: 13px 16px 13px 45px;
			font-size: 11.17px;
			line-height: 117.5%;
			max-height: 40px;
		}

		// effects
		&:hover {
			border-color: $black;
			background-color: transparent;
		}
		&::placeholder {
			color: $placeholder;
			font-size: 13.45px;
			font-weight: 400;
			line-height: 124.5%;
		}
	}

	&__error-text {
		display: block;
		margin-top: 5px;
		color: $red;
		font-size: 0.75rem;
	}

	&__icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 20px;
		line-height: 0;
		overflow: hidden;
		cursor: pointer;

		@media (max-width: 1200px) {
			left: 16px;
		}

		svg {
			width: 20px;
			height: 20px;

			@media (max-width: 1200px) {
				width: 15px;
				height: 15px;
			}
		}
	}

	&__suggestions-container {
		margin: 5px 0 0;
		background: rgba(255, 255, 255, 0.8); // Акриловый эффект
		backdrop-filter: blur(10px); // Размытие для акрилового эффекта
		-webkit-backdrop-filter: blur(10px); // Для Safari
		border: 1px solid rgba(204, 204, 204, 0.5);
		border-radius: 11px;
		position: absolute;
		max-width: 350px;
		width: 100%;
		z-index: 10;
		max-height: 400px;
		overflow-y: auto;
		overflow-x: hidden;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	&__category {
		padding: 0 0 5px;

		&:not(:last-child) {
			border-bottom: 1px solid rgba(204, 204, 204, 0.3);
		}
	}

	&__category-title {
		margin: 0;
		padding: 10px 15px;
		font-size: 14px;
		font-weight: 600;
		color: $black;
		background-color: $categoryBg;
		border-radius: 11px 11px 0 0;
	}

	&__suggestions {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	&__suggestion {
		display: flex;
		align-items: center;
		padding: 12px 15px;
		cursor: pointer;
		transition: all 0.2s ease;
		border-bottom: 1px solid rgba(204, 204, 204, 0.3);

		&:last-child {
			border-bottom: none;
		}

		&:hover {
			background-color: rgba(249, 249, 249, 0.8);
			transform: translateX(5px);
		}

		&-image {
			width: 45px;
			height: 45px;
			border-radius: 8px;
			overflow: hidden;
			margin-right: 15px;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #e0e0e0;

			&--user {
				border-radius: 50%; // Круглая аватарка для пользователей
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.3s ease;
			}

			&-placeholder {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 20px;
				font-weight: bold;
				color: white;
				background-color: #6c5ce7;
				text-transform: uppercase;
			}
		}

		&:hover &-image img &:hover &-image img {
			transform: scale(1.05);
		}

		&-text {
			display: flex;
			flex-direction: column;
			flex: 1;
		}

		&-name {
			font-weight: 600;
			font-size: 14px;
			color: $black;
			margin-bottom: 3px;
		}

		&-owner {
			font-size: 12px;
			color: $placeholder;
		}
	}

	&__no-results {
		padding: 15px;
		text-align: center;
		color: $placeholder;
		font-size: 14px;
	}
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
	-webkit-appearance: none;
}
</style>

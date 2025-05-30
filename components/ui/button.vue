<script setup>
const props = defineProps({
	disabled: {
		type: Boolean,
		default: false,
	},
	transpatent: {
		type: Boolean,
		default: false,
	},
	lilFont: {
		type: Boolean,
		default: false,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
	isFilter: {
		type: Boolean,
		default: false,
	},
	options: {
		type: Array,
		default: () => [],
	},
	selectedOptions: {
		type: Array,
		default: () => [],
	},
	multiSelect: {
		type: Boolean,
		default: false,
	},
	bgColor: {
		type: String,
		default: "#141416",
	},
	fontColor: {
		type: String,
		default: "#FFFFFF",
	},
	borderColor: {
		type: String,
		default: "#141416",
	},
});

const emit = defineEmits(["select", "click", "toggle"]);
const isOpen = ref(false);

const toggleDropdown = () => {
	if (!props.isFilter) {
		emit("click");
		return;
	}
	isOpen.value = !isOpen.value;
};

const toggleOption = (option) => {
	emit("toggle", option);
	if (!props.multiSelect) {
		isOpen.value = false;
	}
};

onMounted(() => {
	if (props.isFilter) {
		document.addEventListener("click", handleOutsideClick);
	}
});

onUnmounted(() => {
	if (props.isFilter) {
		document.removeEventListener("click", handleOutsideClick);
	}
});

const buttonRef = ref(null);

const handleOutsideClick = (event) => {
	if (buttonRef.value && !buttonRef.value.contains(event.target)) {
		isOpen.value = false;
	}
};
</script>

<template>
	<div class="ui-button-wrapper" ref="buttonRef">
		<button
			class="ui-button"
			:disabled="disabled"
			:class="{
				'ui-button--transpatent': transpatent,
				'ui-button--lil-font': lilFont,
				'ui-button--active': isActive || selectedOptions.length > 0,
				'ui-button--filter': isFilter,
				'ui-button--open': isOpen,
			}"
			:style="{
				backgroundColor: bgColor,
				color: fontColor,
				borderColor: borderColor,
			}"
			@click="toggleDropdown"
		>
			<slot />
			<span
				v-if="selectedOptions && selectedOptions.length > 0"
				class="ui-button__badge"
				>{{ selectedOptions.length }}</span
			>
		</button>

		<div v-if="isFilter && isOpen" class="ui-button__dropdown">
			<ul class="ui-button__dropdown-list">
				<li
					v-for="option in options"
					:key="option"
					class="ui-button__dropdown-item"
					:class="{
						'ui-button__dropdown-item--active':
							selectedOptions && selectedOptions.includes(option),
					}"
					@click.stop="toggleOption(option)"
				>
					<span
						class="ui-button__dropdown-checkbox"
						v-if="multiSelect"
					>
						<label class="custom-checkbox">
							<input
								type="checkbox"
								:checked="
									selectedOptions &&
									selectedOptions.includes(option)
								"
								@click.stop
							/>
							<span class="checkmark">
								<svg
									class="checkmark-svg"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M1 8L5 12L15 4"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</label>
					</span>
					{{ option }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
.ui-button-wrapper {
	position: relative;
	display: inline-block;
}

.ui-button {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 18px 30px;
	background-color: $black;
	border: 1.5px solid $black;
	border-radius: 23px;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	font-family: $primaryFont;
	font-size: 16.27px;
	font-weight: 500;
	line-height: 24px;
	text-transform: capitalize;
	color: $white;
	position: relative;

	@media (max-width: 1200px) {
		padding: 11px 17px;
		font-size: 11.5px;
		line-height: 17.25px;
	}
	@media (max-width: 850px) {
		font-size: 11.07px;
		line-height: 13.84px;
	}

	&--transpatent {
		background-color: transparent;
		color: $black;
	}

	&--active {
		background-color: $lightPurple;
		border-color: $lightPurple;
		color: $black;
	}

	&--lil-font {
		padding: 14px 34px 26px 20px;
		font-family: $outfitFont;
		font-size: 14px;
		font-weight: 600;
		line-height: 130%;
		border-radius: 12.2px;
		text-wrap: nowrap;

		@media (max-width: 850px) {
			padding: 12px 30px 22px 16px;
			font-size: 10px;
		}
	}

	&--filter {
		min-width: 200px;
		position: relative;
	}

	&--open {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	&:disabled {
		pointer-events: none;
		cursor: not-allowed;
		opacity: 0.7;
	}

	&:hover {
		opacity: 0.8;
	}

	&__badge {
		position: absolute;
		top: -8px;
		right: -8px;
		background-color: $black;
		color: $white;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: bold;
	}
}

.ui-button__dropdown {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: $white;
	border: 1.5px solid $black;
	border-top: none;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	z-index: 10;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-height: 200px;
	overflow: hidden;

	&-list {
		list-style: none;
		padding: 0;
		margin: 0;
		overflow-y: auto; /* Включаем прокрутку */
		max-height: 200px; /* Ограничиваем высоту списка */
		scrollbar-width: none; /* Скрываем полосу прокрутки в Firefox */
		-ms-overflow-style: none; /* Скрываем полосу прокрутки в IE и Edge */

		&::-webkit-scrollbar {
			display: none; /* Скрываем полосу прокрутки в WebKit-браузерах */
		}
	}

	&-item {
		padding: 12px 20px;
		font-size: 14px;
		cursor: pointer;
		transition: background-color 0.2s;
		display: flex;
		align-items: center;
		gap: 10px;

		&:hover {
			background-color: $lightPurple;
		}

		&:last-child {
			border-bottom-left-radius: 12px;
			border-bottom-right-radius: 12px;
		}

		&--active {
			background-color: $purple;
			font-weight: 500;

			&:hover {
				background-color: $purple;
			}
		}
	}

	&-checkbox {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.custom-checkbox {
	position: relative;
	display: inline-block;
	width: 20px;
	height: 20px;

	input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		border: 2px solid #000;
		border-radius: 50%;
		background-color: transparent;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;

		.checkmark-svg {
			width: 12px;
			height: 12px;
			stroke: #000;
			stroke-width: 2;
			stroke-linecap: round;
			stroke-linejoin: round;
			fill: none;
			opacity: 0;
			stroke-dasharray: 16;
			stroke-dashoffset: 16;
			transition: opacity 0.2s ease-in-out;
			animation: draw-check 0.3s ease forwards;
			animation-play-state: paused;
		}
	}

	input:checked + .checkmark .checkmark-svg {
		opacity: 1;
		animation-play-state: running;
	}

	input:not(:checked) + .checkmark .checkmark-svg {
		opacity: 0;
		animation: erase-check 0.3s ease forwards;
	}
}

// Анимация прорисовки галочки
@keyframes draw-check {
	from {
		stroke-dashoffset: 16;
	}
	to {
		stroke-dashoffset: 0;
	}
}

// Анимация скрытия галочки
@keyframes erase-check {
	from {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 16;
	}
}
.ui-button__dropdown-list::-webkit-scrollbar {
	display: none; /* Скрывает scrollbar в WebKit-браузерах */
}
</style>

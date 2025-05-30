<script setup>
import { useProductsStore } from "~/stores/products";
import { useWindowSize } from "@vueuse/core";
import Filters from "~/components/filters";

const productsStore = useProductsStore();
const { width: windowWidth } = useWindowSize();
const cardWidth = 252;
const priceSortDirection = ref(null);

const props = defineProps({
	title: {
		type: String,
		default: "Explore Marketplace",
	},
	allButton: {
		type: Boolean,
		default: true,
	},
	lazyLoading: {
		type: Boolean,
		default: false,
	},
});

onMounted(() => {
	productsStore.init();
});

// Режим обычного отображения карточек (на главной странице)
const cardCountLimit = ref(0);
const getColumnsByWidth = (width) => {
	if (width <= 768) return 1;
	if (width <= 1024) return 2;
	if (width <= 1350) return 3;
	return 4;
};

watchEffect(() => {
	if (!props.lazyLoading) {
		const width = windowWidth.value;
		const columns = getColumnsByWidth(width);
		const rows = columns === 1 ? 3 : 2;
		cardCountLimit.value = columns * rows;
	}
});

// Режим lazyLoading: начальное значение – 8 карточек
const lazyCount = ref(8);

const visibleCards = computed(() => {
	if (props.lazyLoading) {
		return productsStore.filteredProducts.slice(0, lazyCount.value);
	} else {
		return productsStore.filteredProducts.slice(0, cardCountLimit.value);
	}
});

// Lazy loading
let observer = null;
const loadMoreRef = ref(null);

const loadMore = () => {
	if (lazyCount.value < productsStore.filteredProducts.length) {
		lazyCount.value += 8;
	}
};

onMounted(() => {
	if (props.lazyLoading) {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						loadMore();
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);
		if (loadMoreRef.value) {
			observer.observe(loadMoreRef.value);
		}
	}
});

onBeforeUnmount(() => {
	if (observer && loadMoreRef.value) {
		observer.unobserve(loadMoreRef.value);
	}
});
</script>

<template>
	<section class="marketplace marketplace__container">
		<h2 class="marketplace__title">{{ title }}</h2>
		<div class="marketplace__filter">
			<Filters :allButton="allButton" />
		</div>
		<div class="marketplace__content">
			<NftCard
				v-for="(card, index) in visibleCards"
				:key="card.nftName + index || 'card-' + index"
				:card="card"
			/>
		</div>
		<!-- Lazy loading placeholder (внизу страницы) -->
		<div
			v-if="lazyLoading"
			ref="loadMoreRef"
			class="marketplace__observer"
		/>

		<nuxt-link
			class="marketplace__more"
			to="/"
			v-if="allButton && !lazyLoading"
		>
			Explore All
			<IconsArrowMore />
		</nuxt-link>
	</section>
</template>

<style lang="scss" scoped>
.marketplace {
	margin-top: 100px;

	@media (max-width: 1200px) {
		margin-top: 70px;
	}
	@media (max-width: 850px) {
		margin-top: 100px;
	}

	&__container {
		padding: 0 100px;

		@media (max-width: 1200px) {
			padding: 0 70px;
		}
		@media (max-width: 850px) {
			padding: 0 43px;
		}
	}

	&__title {
		margin: 0 auto 65px;
		font-size: 45px;
		font-weight: 600;
		line-height: 26.92px;
		color: $black;
		text-align: center;

		@media (max-width: 1200px) {
			margin: 0 auto 45px;
			font-size: 32px;
			line-height: 19.14px;
		}

		@media (max-width: 850px) {
			margin: 0 auto 30px;
			font-size: 30px;
			line-height: 125%;
		}
	}

	&__filter {
		margin-bottom: 100px;

		@media (max-width: 1200px) {
			margin-bottom: 70px;
		}
		@media (max-width: 850px) {
			margin-bottom: 75px;
		}

		&-list {
			margin: 0 auto;
			display: flex;
			align-items: center;
			gap: 20px;
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	&__content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		row-gap: 64px;
		column-gap: 30px;
		margin-bottom: 100px;
		justify-items: center;

		@media (max-width: 1350px) {
			margin-bottom: 70px;
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}

	&__more {
		max-width: max-content;
		margin-left: auto;
		position: relative;
		display: flex;
		align-items: center;
		gap: 15px;
		justify-content: flex-end;
		font-size: 17.67px;
		font-weight: 500;
		line-height: 39.92px;
		letter-spacing: -0.09px;
		color: $lightGrey;

		@media (max-width: 1200px) {
			font-size: 12.57px;
			line-height: 28.39px;
		}
		@media (max-width: 850px) {
			margin: 0 auto;
			gap: 10px;
			font-size: 12.29px;
			line-height: 27.76px;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 0%;
			height: 1px;
			background-color: $lightGrey;
			transition: width 0.3s ease-in-out;
		}

		&:hover {
			&::after {
				width: 100%;
				transition: width 0.3s ease-in-out;
			}
		}

		svg {
			width: 15px;
			height: 15px;

			@media (max-width: 1200px) {
				width: 10px;
				height: 10px;
			}
		}
	}
}

.rotate-180 {
	transform: rotate(180deg);
	transition: transform 0.3s ease;
}

.reset-button {
	color: $lightGrey;
	border-color: $lightGrey;

	&:hover:not(:disabled) {
		color: $lightPurple;
		border-color: $lightPurple;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
}
.close {
	width: 16px;
	height: 16px;
}
</style>

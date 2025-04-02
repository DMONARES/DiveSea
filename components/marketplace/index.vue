<script setup>
import { useMarketplaceStore } from "~/stores/marketplace";
import { useWindowSize } from '@vueuse/core';

const marketplaceStore = useMarketplaceStore();
const { width: windowWidth } = useWindowSize();
const cardWidth = 252;
const priceSortDirection = ref(null);

onMounted(() => {
	marketplaceStore.init();
});

const visibleCards = computed(() => {
	const columns = Math.floor(windowWidth.value / cardWidth);
	return marketplaceStore.filteredCards.slice(0, columns * 2);
});

const togglePriceSort = () => {
	if (priceSortDirection.value === null) {
		priceSortDirection.value = "asc";
	} else if (priceSortDirection.value === "asc") {
		priceSortDirection.value = "desc";
	} else {
		priceSortDirection.value = null;
	}
	marketplaceStore.setPriceSort(priceSortDirection.value);
};

const resetFilters = () => {
	priceSortDirection.value = null;
	marketplaceStore.resetFilters();
};

const toggleCategoryFilter = (category) => {
	marketplaceStore.toggleCategoryFilter(category);
};

const toggleCollectionFilter = (collection) => {
	marketplaceStore.toggleCollectionFilter(collection);
};

const showAllItems = () => {
	resetFilters();
};
</script>

<template>
	<div class="marketplace marketplace__container">
		<h2 class="marketplace__title">Explore Marketplace</h2>
		<div class="marketplace__filter">
			<ul class="marketplace__filter-list">
				<li>
					<UiButton
						:transpatent="true"
						:isActive="marketplaceStore && !marketplaceStore.hasActiveFilters"
						@click="showAllItems"
					>
						All
					</UiButton>
				</li>
				<li>
					<UiButton
						v-if="marketplaceStore"
						:transpatent="true"
						:isFilter="true"
						:options="marketplaceStore.categories"
						:selectedOptions="marketplaceStore.selectedCategories"
						:multiSelect="true"
						@toggle="toggleCategoryFilter"
					>
						<IconsCategory />
						Category
					</UiButton>
				</li>
				<li>
					<UiButton
						v-if="marketplaceStore"
						:transpatent="true"
						:isFilter="true"
						:options="marketplaceStore.collections"
						:selectedOptions="marketplaceStore.selectedCollections"
						:multiSelect="true"
						@toggle="toggleCollectionFilter"
					>
						<IconsCollection />
						Collection
					</UiButton>
				</li>
				<li>
					<UiButton
						v-if="marketplaceStore"
						:transpatent="true"
						@click="togglePriceSort"
						:isActive="priceSortDirection !== null"
					>
						<IconsPrice />
						Price
						<IconsArrowMore
							v-if="priceSortDirection !== null"
							:class="{
								'rotate-180': priceSortDirection === 'desc',
							}"
						/>
						<IconsClose
							v-if="!priceSortDirection"
						/>
					</UiButton>
				</li>
			</ul>
		</div>
		<div class="marketplace__content">
			<NftCard
				v-for="card in visibleCards"
				:key="card.title"
				:card="card"
			/>
		</div>
		<nuxt-link class="marketplace__more" to="/">
			Explore All
			<IconsArrowMore />
		</nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
.marketplace {
	margin-top: 100px;

	&__container {
		padding: 0 100px;
	}

	&__title {
		margin: 0 auto 65px;
		font-size: 45px;
		font-weight: 600;
		line-height: 26.92px;
		color: $black;
		text-align: center;
	}

	&__filter {
		margin-bottom: 100px;
		&-list {
			width: max-content;
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

		@media (max-width: 1350px) {
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
		color: $lightGreen;
		border-color: $lightGreen;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
}
</style>

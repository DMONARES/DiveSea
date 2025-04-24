<script setup>
import { useProductsStore } from "~/stores/products";

const productsStore = useProductsStore();
const priceSortDirection = ref(null);

const togglePriceSort = () => {
	if (priceSortDirection.value === null) {
		priceSortDirection.value = "asc";
	} else if (priceSortDirection.value === "asc") {
		priceSortDirection.value = "desc";
	} else {
		priceSortDirection.value = null;
	}
	productsStore.setPriceSort(priceSortDirection.value);
};

const resetFilters = () => {
	priceSortDirection.value = null;
	productsStore.resetFilters();
};

const toggleCategoryFilter = (category) => {
	productsStore.toggleCategoryFilter(category);
};

const toggleCollectionFilter = (collection) => {
	productsStore.toggleCollectionFilter(collection);
};

const showAllItems = () => {
	resetFilters();
};
</script>

<template>
	<div class="filters">
		<ul class="filters__list">
			<li>
				<UiButton
					:transpatent="true"
					bgColor="#FFF"
					fontColor="#141416"
					:isActive="!productsStore.hasActiveFilters"
					@click="showAllItems"
				>
					All
				</UiButton>
			</li>
			<li>
				<UiButton
					:transpatent="true"
					:isFilter="true"
					:options="productsStore.categories"
					:selectedOptions="productsStore.selectedCategories"
					:multiSelect="true"
					bgColor="#FFF"
					fontColor="#141416"
					@toggle="toggleCategoryFilter"
				>
					<IconsCategory />
					Category
				</UiButton>
			</li>
			<li>
				<UiButton
					:transpatent="true"
					:isFilter="true"
					:options="productsStore.collections"
					:selectedOptions="productsStore.selectedCollections"
					:multiSelect="true"
					bgColor="#FFF"
					fontColor="#141416"
					@toggle="toggleCollectionFilter"
				>
					<IconsCollection />
					Collection
				</UiButton>
			</li>
			<li>
				<UiButton
					:transpatent="true"
					bgColor="#FFF"
					fontColor="#141416"
					@click="togglePriceSort"
					:isActive="priceSortDirection !== null"
				>
					<IconsPrice />
					Price
					<IconsArrowMore
						v-if="priceSortDirection !== null"
						:class="{ 'rotate-180': priceSortDirection === 'desc' }"
					/>
					<IconsClose v-if="!priceSortDirection" class="close" />
				</UiButton>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.filters {
	&__list {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>

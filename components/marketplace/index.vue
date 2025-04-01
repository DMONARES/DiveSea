<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import IconsCategory from "@/components/icons/category.vue";
import IconsCollection from "@/components/icons/collection.vue";
import IconsPrice from "@/components/icons/price.vue";
import { useMarketplaceStore } from "~/stores/marketplace";

const filters = [
	{ name: "Category", icon: IconsCategory },
	{ name: "Collection", icon: IconsCollection },
	{ name: "Price", icon: IconsPrice },
];

const marketplaceStore = useMarketplaceStore();
const cards = marketplaceStore.cards;

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
	windowWidth.value = window.innerWidth;
};

onMounted(() => {
	window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
	window.removeEventListener("resize", updateWidth);
});

const cardWidth = 252;

const visibleCards = computed(() => {
	const columns = Math.floor(windowWidth.value / cardWidth);

	if (windowWidth.value >= 1350) {
		return cards.slice(0, 8);
	} else if (windowWidth.value >= 1025) {
		return cards.slice(0, 6);
	} else if (windowWidth.value >= 768) {
		return cards.slice(0, 6);
	} else {
		return cards.slice(0, 3);
	}
});
</script>

<template>
	<div class="marketplace marketplace__container">
		<h2 class="marketplace__title">Explore Marketplace</h2>
		<div class="marketplace__filter">
			<ul class="marketplace__filter-list">
				<li class="marketplace__filter-item">
					<UiButton
						:transpatent="true"
						class="marketplace__filter-button"
					>
						All
					</UiButton>
				</li>
				<li
					class="marketplace__filter-item"
					v-for="(filter, index) in filters"
					:key="'filter - ' + index"
				>
					<UiButton
						:transpatent="true"
						class="marketplace__filter-button"
					>
						<component :is="filter.icon" />
						{{ filter.name }}
					</UiButton>
				</li>
			</ul>
		</div>
		<div class="marketplace__content">
			<NftCard
				v-for="(card, index) in visibleCards"
				:key="'card - ' + index"
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
		}
		&-button {
			display: flex;
			align-items: center;
			gap: 10px;
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

	// more
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
</style>

<script setup>
import { useProductsStore } from "~/stores/products";

const route = useRoute();
const userUrl = computed(() => route.params.id || route.params.is);

const productsStore = useProductsStore();

// Фильтруем карточки по nickname
const cards = computed(() =>
	productsStore.products.filter(
		(item) => String(item.nickname) === String(userUrl.value)
	)
);

// Фильтруем активность по nickname
const userActivity = computed(() =>
	productsStore.filteredProducts.filter(
		(item) => String(item.nickname) === String(userUrl.value)
	)
);

// Получаем уникальные статусы для фильтра Sales (из всех карточек)
const statusOptions = computed(() => {
	const statuses = productsStore.products.map((item) => item.status);
	return [...new Set(statuses)].filter(Boolean);
});

// Получаем уникальные блокчейны для фильтра Chains (из всех карточек)
const chainOptions = computed(() => {
	const chains = productsStore.products.map((item) => item.chain);
	return [...new Set(chains)].filter(Boolean);
});

// Устанавливаем Title для страницы
const title = computed(() => userUrl.value || route.path.split("/").pop());
useHead(() => ({
	title: "DeveSea — User — " + title.value,
}));

import IconsCollectionTab from "@/components/icons/collection-tab.vue";
import IconsActivityTab from "@/components/icons/activity-tab.vue";
const tabList = [
	{ name: "collection", label: "Collection", icon: IconsCollectionTab },
	{ name: "activity", label: "Activity", icon: IconsActivityTab },
];

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

const toggleStatusFilter = (status) => {
	productsStore.toggleStatusFilter(status, userUrl.value);
};

const toggleChainFilter = (chain) => {
	productsStore.toggleChainFilter(chain, userUrl.value);
};

const showAllItems = () => {
	resetFilters();
};

onMounted(() => {
	productsStore.initUserProducts(userUrl.value);
});
</script>

<template>
	<main class="profile">
		<ProfileBanner class="profile__banner" />
		<div class="profile__content section">
			<div class="profile__content-info">
				<ProfileFollow :nickname="userUrl" />
				<ProfileInfo />
			</div>
			<div class="profile__content-tabs">
				<UiTabs :tabs="tabList">
					<template #collection>
						<NftCard
							v-if="cards.length"
							v-for="(card, index) in cards"
							:key="'card - ' + index"
							:card="card"
						/>
						<div class="profile__content-tabs--empty" v-else>
							This user doesn't have any NFTs in their collection
							yet
						</div>
					</template>
					<template #activity>
						<div class="profile__content-activity">
							<div class="profile__content-activity-filters">
								<UiButton
									:transpatent="true"
									:isFilter="true"
									:options="statusOptions"
									:selectedOptions="
										productsStore.selectedStatuses
									"
									:multiSelect="true"
									bgColor="#FFF"
									fontColor="#141416"
									@toggle="toggleStatusFilter"
								>
									<IconsCard />
									Sales
								</UiButton>
								<UiButton
									:transpatent="true"
									:isFilter="true"
									:options="chainOptions"
									:selectedOptions="
										productsStore.selectedChains
									"
									:multiSelect="true"
									bgColor="#FFF"
									fontColor="#141416"
									@toggle="toggleChainFilter"
								>
									<IconsChain />
									All Chains
									<IconsArrow />
								</UiButton>
							</div>
							<ul class="profile__content-activity-list">
								<li
									class="profile__content-activity-item"
									v-for="(item, index) in userActivity"
									:key="'item - ' + index"
								>
									<NftCardActive :item="item" />
								</li>
							</ul>
						</div>
					</template>
				</UiTabs>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.profile {
	&__content {
		display: flex;
		align-items: flex-start;
		gap: 30px;
		width: 100%;

		@media (max-width: 950px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		&-info {
			display: flex;
			flex-direction: column;
			width: calc(50% + 100px);

			@media (max-width: 950px) {
				width: 100%;
				align-items: center;
				justify-content: center;
			}
		}
		&-tabs {
			width: 100%;

			&--empty {
				width: 100%;
				grid-column: span 2;
				font-size: 24px;
				font-weight: 700;
			}
		}

		&-activity {
			width: 100%;
			grid-column: span 2;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 60px;

			&-filters {
				display: flex;
				align-items: center;
				gap: 30px;
			}

			&-list {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 40px;
			}
		}
	}
}
.section {
	position: relative;
	padding: 0 130px;

	@media (max-width: 1200px) {
		padding: 0 100px;
	}

	@media (max-width: 850px) {
		padding: 0 30px;
	}
}
</style>

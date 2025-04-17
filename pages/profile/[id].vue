<script setup>
import { useProductsStore } from "~/stores/products";
import { useRoute } from "vue-router";

const route = useRoute();
const userUrl = route.params.nickname;

const productsStore = useProductsStore();

const product = productsStore.products.find(
	(item) => String(item.creatorName) === String(userUrl)
);
const cards = productsStore.filteredProducts; // Здесь можно использовать filteredProducts или products

// Устанавливаем Title для страницы
const title = route.params.nickname || route.path.split("/").pop();
useHead(() => ({
	title: "Профиль пользователя — " + title,
}));

import IconsCollectionTab from "@/components/icons/collection-tab.vue";
import IconsActivityTab from "@/components/icons/activity-tab.vue";

const tabList = [
	{ name: "collection", label: "Collection", icon: IconsCollectionTab },
	{ name: "activity", label: "Activity", icon: IconsActivityTab },
];
</script>

<template>
	<main class="main profile">
		<ProfileBanner class="profile__banner" />
		<div class="profile__content section">
			<div class="profile__content-info">
				<ProfileFollow />
				<ProfileInfo />
			</div>
			<div class="profile__content-tabs">
				<UiTabs :tabs="tabList">
					<template #collection> </template>
					<template #activity>
						<NftCard
							v-for="(card, index) in cards"
							:key="'card - ' + index"
							:card="card"
						/>
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

		&-info {
			width: 100%;
		}
		&-tabs {
			width: 100%;
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
		margin-left: 20px;
		padding: 0 30px;
	}
}
</style>

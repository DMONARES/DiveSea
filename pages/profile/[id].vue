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
</script>

<template>
	<main class="main profile">
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
						<div class="profile__content-tabs--empty" v-else>This user doesn't have any NFTs in their collection yet</div>
					</template>
					<template #activity> йцу </template>
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

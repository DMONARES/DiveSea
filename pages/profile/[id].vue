<script setup>
import { useRecommendStore } from "~/stores/recommend";

const route = useRoute();
const userUrl = route.params.nickname;

const recommendStore = useRecommendStore();

const product = recommendStore.slides.find(
	(item) => String(item.nickname) === String(userUrl)
);
//Устанавливаем Title для страницы
const title = route.params.nickname || route.path.split("/").pop();
useHead(() => ({
	title: "Профиль пользователя — " + title,
}));
</script>

<template>
	<main class="main profile">
		<ProfileBanner class="profile__banner" />
		<div class="profile__content section">
			<ProfileFollow />
			<ProfileInfo />
		</div>
	</main>
</template>

<style lang="scss" scoped>
.section {
	position: relative;
	padding: 0 96px;
	margin-left: 50px;

	@media (max-width: 1200px) {
		padding: 0 70px;
	}

	@media (max-width: 850px) {
		margin-left: 20px;
		padding: 0 30px;
	}
}
</style>

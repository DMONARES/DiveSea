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
	title: 'Профиль пользователя — ' + title,
}));
</script>

<template>
	<main>
		<ProfileBanner />
	</main>
</template>

<style lang="scss" scoped></style>

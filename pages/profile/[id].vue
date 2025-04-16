<script setup>
import { useRecommendStore } from "~/stores/recommend";

const route = useRoute();
const userUrl = route.params.nickname;

const recommendStore = useRecommendStore();

const product = recommendStore.slides.find(
	(item) => String(item.nickname) === String(userUrl)
);
</script>

<template>
	<main>
{{ product }}
	</main>
</template>

<style lang="scss" scoped>

</style>
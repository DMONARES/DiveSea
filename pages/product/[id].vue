<script setup>
import { useRecommendStore } from "~/stores/recommend";

const route = useRoute();
const productId = route.params.id;

const recommendStore = useRecommendStore();

const product = recommendStore.slides.find(
	(item) => String(item.id) === String(productId)
);
</script>

<template>
	<main>
		<UiBack />
		<NftCardDetail :product="product" />
		<Recommend title="From Creator" :recent="false" />
	</main>
</template>

<style lang="scss" scoped>
main {
	overflow: hidden;
}
</style>

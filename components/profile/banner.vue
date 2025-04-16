<script setup>
import { useRecommendStore } from "~/stores/recommend";

const recommendStore = useRecommendStore();

const product = recommendStore.slides.find((item) => item.poster);
</script>

<template>
	<div class="profile-banner">
		<img :src="product.poster" alt="" />
	</div>
</template>

<style lang="scss" scoped>
.profile-banner {
	margin: 100px auto 75px;
	padding: 0 96px;
	border-radius: 20px;
	overflow: hidden;

	img {
		width: 100%;
		margin: 0 auto;
		border-radius: 20px;
		overflow: hidden;

		@media (max-width: 850px) {
			border-radius: 0;
		}
	}

	@media (max-width: 1200px) {
		margin: 70px auto 50px;
		padding: 0 70px;
	}

	@media (max-width: 850px) {
		margin: 60px auto 100px;
		border-radius: 0;
		padding: 0;
	}
}
</style>

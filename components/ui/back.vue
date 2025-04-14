<script setup>
const router = useRouter();
</script>

<template>
	<button @click="router.back()" class="back-button">
		<IconsBack />
		<div class="back-button__text">Product Detail</div>
	</button>
</template>

<style lang="scss" scoped>
.back-button {
	width: 100%;
	margin: 145px 0 55px;
	padding: 0 96px;
	display: flex;
	align-items: center;
	gap: 35px;

	@media (max-width: 1200px) {
		margin: 100px 0 40px;
		padding: 0 70px;
	}

	@media (max-width: 950px) {
		display: none;
	}

	&__text {
		font-size: 31.06px;
		font-weight: 600;
		line-height: 27.61px;
	}
}
</style>

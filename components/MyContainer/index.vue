<template>
	<div class="container">
		<slot />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
	width: 100%;
	max-width: 1700px;
	margin: 0 auto;
	padding: 0 25px;
	@media (max-width: 1500px) {
		max-width: 1300px;
	}
	@media (max-width: 1200px) {
		max-width: 940px;
	}
}
</style>

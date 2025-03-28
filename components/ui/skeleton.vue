<template>
	<div class="ui-skeleton" />
</template>

<style lang="scss">
	.ui-skeleton
	{
		width: 100%;
		height: 100%;
		background: $lightGray;
		animation: skeleton-loading 1.5s infinite ease;
	}

	@keyframes skeleton-loading
	{
		0% { opacity: 1; }
		50% { opacity: 0.4; }
		100% { opacity: 1; }
	}
</style>
<template>
	<div class="huge-preloader">
		<div class="huge-preloader__preloader" />
	</div>
</template>

<style lang='scss'>
	.huge-preloader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 9999;
		background-color: $white;
		opacity: .95;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.huge-preloader__preloader
	{
		display: grid;
		place-items: center;
		max-width: 30px;
		max-height: 30px;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: conic-gradient(
			from 180deg at 50% 50%,
			$lightGray 0deg,
			$black 360deg
		);
		animation: spin 2s infinite linear;

		&::before
		{
			content: "";
			border-radius: 50%;
			width: 80%;
			height: 80%;
			background-color: $white;
		}
	}

	@keyframes spin
	{
		to { transform: rotate(1turn); }
	}
</style>
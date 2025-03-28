<template>
	<div class="container">
		<header class="header">
			<div class="header__logo">
				<icons-logo />
			</div>
			<nav class="header__navigation">
				<NuxtLink class="header__navigation-link" to="/">
					Главная
				</NuxtLink>
			</nav>
		</header>
	</div>
</template>

<style lang='scss'>
	.header
	{
		margin-bottom: 50px;
		padding: 20px 0;
		border-bottom: 2px solid $black;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header__logo { line-height: 0; }

	.header__navigation
	{
		display: flex;
		align-items: center;
		gap: 25px;
	}

	.header__navigation-link
	{
		font-size: 1.125rem; // 18px
		color: $gray;

		@include transition();
		&.router-link-active { color: $black; }
	}
</style>
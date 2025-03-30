<script setup>
const searchText = ref("");
</script>
<template>
	<MyContainer>
		<header class="header">
			<!-- left -->
			<div class="header__left">
				<div class="header__logo">
					<nuxt-link to="/">
						<icons-logo />
					</nuxt-link>
				</div>
				<nav class="header__nav">
					<ul class="header__nav-list">
						<li class="header__nav-item">
							<nuxt-link class="header__nav-link" to="/">
								Discover
							</nuxt-link>
						</li>
						<li class="header__nav-item">
							<nuxt-link class="header__nav-link" to="/">
								Creators
							</nuxt-link>
						</li>
						<li class="header__nav-item">
							<nuxt-link class="header__nav-link" to="/">
								Sell
							</nuxt-link>
						</li>
						<li class="header__nav-item">
							<nuxt-link class="header__nav-link" to="/">
								Stats
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
			<!-- right -->
			<div class="header__left">
				<div class="header__search">
					<UiSearch
						v-model="searchText"
						placeholder="Search Art Work / Creator"
					/>
				</div>
				<div class="header__button">
					<uiButton>Connect Wallet</uiButton>
				</div>
			</div>
		</header>
	</MyContainer>
</template>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 45px 0;
	&__left {
		display: flex;
		align-items: center;
		gap: 57px;
	}
	&__right {
		display: flex;
		align-items: center;
		gap: 30px;
	}
	&__logo {
	}
	&__nav {
		&-list {
			display: flex;
			align-items: center;
			gap: 53px;
		}
		&-item {
		}
		&-link {
			font-family: $secondaryFont;
			font-size: 17.83px;
			font-weight: 500;
			line-height: 26.74px;
			color: $grey;
			text-transform: uppercase;

			&.nuxt-link-active {
				color: $black;
			}
			&:hover {
				color: $black;
			}
		}
	}
	&__search {
	}
	&__button {
	}
}
</style>

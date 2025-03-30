<script setup>
const searchText = ref("");
</script>
<template>
	<MyContainer>
		<header class="header">
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
			<div class="header__right">
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

	@media (max-width: 1200px) {
		padding: 32px 0;
	}
	&__left {
		display: flex;
		align-items: center;
		gap: 57px;

		@media (max-width: 1200px) {
			gap: 40px;
		}
	}
	&__right {
		display: flex;
		align-items: center;
		gap: 30px;

		@media (max-width: 1200px) {
			gap: 20px;
		}
	}
	&__logo {
		a {
			svg {
				@media (max-width: 1200px) {
					max-width: 38px;
					max-height: 38px;
				}
			}
		}
	}
	&__nav {
		&-list {
			display: flex;
			align-items: center;
			gap: 53px;

			@media (max-width: 1200px) {
				gap: 38px;
			}
		}
		&-link {
			font-family: $secondaryFont;
			font-size: 17.83px;
			font-weight: 500;
			line-height: 26.74px;
			color: $grey;
			text-transform: uppercase;

			@media (max-width: 1200px) {
				font-size: 12.68px;
				line-height: 19.02px;
			}

			&.nuxt-link-active {
				color: $black;
			}
			&:hover {
				color: $black;
			}
		}
	}
}
</style>

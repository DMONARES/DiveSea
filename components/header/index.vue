<script setup>
const searchText = ref("");
const isMobile = ref(false);
const isMenuOpen = ref(false);
const navLinks = [
	{
		name: "Discover",
		link: "/discover",
	},
	{
		name: "Creators",
		link: "/creators",
	},
	{
		name: "Sell",
		link: "/sell",
	},
	{
		name: "Stats",
		link: "/stats",
	},
];

onMounted(() => {
	checkMobile();
	window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
	window.removeEventListener("resize", checkMobile);
});

function checkMobile() {
	isMobile.value = window.innerWidth <= 850;
}

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value;
	if (isMenuOpen.value) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
}
</script>

<template>
	<MyContainer>
		<header class="header">
			<div class="header__left">
				<div class="header__logo">
					<nuxt-link to="/">
						<icons-logo color="#000" />
						<icons-dive-sea
							v-if="isMobile"
							color="#000"
							class="header__logo-name"
						/>
					</nuxt-link>
				</div>
				<nav class="header__nav" v-if="!isMobile">
					<ul class="header__nav-list">
						<li
							class="header__nav-item"
							v-for="(link, index) in navLinks"
							:key="index"
						>
							<nuxt-link class="header__nav-link" :to="link.link">
								{{ link.name }}
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
			<div class="header__right">
				<div class="header__search" v-if="!isMobile">
					<UiSearch
						v-model="searchText"
						placeholder="Search Art Work / Creator"
					/>
				</div>
				<div class="header__button" v-if="!isMobile">
					<uiButton>Connect Wallet</uiButton>
				</div>
				<button
					class="header__burger-btn"
					:class="{ 'header__burger-btn--active': isMenuOpen }"
					v-if="isMobile"
					@click="toggleMenu"
					aria-label="Toggle menu"
				>
					<span></span>
				</button>
			</div>
		</header>
	</MyContainer>

	<!-- Мобильное меню -->
	<div
		class="mobile-menu"
		:class="{ 'mobile-menu--open': isMenuOpen && isMobile }"
	>
		<div class="mobile-menu__overlay"></div>
		<div class="mobile-menu__content">
			<div class="mobile-menu__search">
				<UiSearch
					v-model="searchText"
					placeholder="Search Art Work / Creator"
				/>
			</div>
			<nav class="mobile-menu__nav">
				<ul class="mobile-menu__nav-list">
					<li
						class="mobile-menu__nav-item"
						v-for="(link, index) in navLinks"
						:key="index"
					>
						<nuxt-link
							class="mobile-menu__nav-link"
							:to="link.link"
							@click="isMenuOpen = false"
						>
							{{ link.name }}
						</nuxt-link>
					</li>
				</ul>
			</nav>
			<div class="mobile-menu__button">
				<uiButton>Connect Wallet</uiButton>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 45px 0;
	position: relative;
	z-index: 1001;
	background-color: white;

	@media (max-width: 1200px) {
		padding: 32px 0;
	}

	@media (max-width: 850px) {
		padding: 20px 0;
		border-bottom: 1px solid $lightGrey;
	}

	&__left {
		display: flex;
		align-items: center;
		gap: 57px;

		@media (max-width: 1200px) {
			gap: 25px;
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
			display: flex;
			align-items: center;
			gap: 10px;

			svg {
				@media (max-width: 1200px) {
					max-width: 38px;
					max-height: 38px;
				}
			}
			svg:last-child {
				max-width: 88px;
				width: 100%;
			}
		}
	}
	&__nav {
		&-list {
			display: flex;
			align-items: center;
			gap: 53px;

			@media (max-width: 1200px) {
				gap: 30px;
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

	&__burger-btn {
		width: 30px;
		height: 30px;
		position: relative;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1002;

		span,
		span::before,
		span::after {
			display: block;
			position: absolute;
			width: 24px;
			height: 2px;
			background-color: $black;
			transition: all 0.3s ease;
		}

		span::before {
			content: "";
			top: -8px;
		}

		span::after {
			content: "";
			top: 8px;
		}

		&--active {
			span {
				background-color: transparent;

				&::before {
					transform: rotate(45deg);
					top: 0;
				}

				&::after {
					transform: rotate(-45deg);
					top: 0;
				}
			}
		}
	}
}

.mobile-menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 1000;
	visibility: hidden;
	opacity: 0;
	transition: all 0.4s ease;
	display: flex;
	flex-direction: column;
	transform: translateY(-100%);

	&--open {
		visibility: visible;
		opacity: 1;
		transform: translateY(0);
	}

	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(15px);
		z-index: -1;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
		padding: 120px 20px 40px;
		max-height: 100%;
		overflow-y: auto;
	}

	&__search {
		width: 100%;
		max-width: max-content;
	}

	&__nav {
		width: 100%;
		max-width: 400px;

		&-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}

		&-item {
			width: 100%;
			text-align: center;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			padding-bottom: 15px;
		}

		&-link {
			font-family: $secondaryFont;
			font-size: 24px;
			font-weight: 500;
			line-height: 36px;
			color: $grey;
			text-transform: uppercase;
			display: block;
			padding: 10px 0;

			&.nuxt-link-active {
				color: $black;
			}

			&:hover {
				color: $black;
			}
		}
	}

	&__button {
		margin-top: 20px;
	}
}
</style>

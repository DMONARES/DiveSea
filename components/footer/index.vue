<script setup>
import IconsInsta from "@/components/icons/insta.vue";
import IconsLinkedin from "@/components/icons/linkedin.vue";
import IconsFacebook from "@/components/icons/facebook.vue";
import IconsTwitter from "@/components/icons/twitter.vue";

const links = [
	{
		link: "/",
		name: "Privacy Policy",
	},
	{
		link: "/",
		name: "Term & Conditions",
	},
	{
		link: "/",
		name: "About Us",
	},
	{
		link: "/",
		name: "Contact",
	},
];

const socials = [
	{
		link: "/",
		icon: IconsInsta,
	},
	{
		link: "/",
		icon: IconsLinkedin,
	},
	{
		link: "/",
		icon: IconsFacebook,
	},
	{
		link: "/",
		icon: IconsTwitter,
	},
];
</script>

<template>
	<footer class="footer">
		<div class="footer__top">
			<div class="footer__left">
				<nuxt-link to="/" class="footer__top-logo">
					<IconsLogo color="#FFFFFF" />
					<IconsDiveSea color="#FFFFFF" />
				</nuxt-link>
				<div class="footer__bottom-social mobile-visible">
					<ul class="footer__bottom-social-list">
						<li
							class="footer__bottom-social-item"
							v-for="(social, index) in socials"
							:key="'social - ' + index"
						>
							<nuxt-link
								:to="social.link"
								class="footer__bottom-social-link"
							>
								<component
									:is="social.icon"
									class="footer__bottom-social-icon"
								/>
							</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
			<nav class="footer__top-nav">
				<ul class="footer__top-nav-list">
					<li
						class="footer__top-nav-item"
						v-for="(link, index) in links"
						:key="'link - ' + index"
					>
						<nuxt-link :to="link.link">{{ link.name }}</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
		<div class="footer__bottom">
			<div class="footer__bottom-extra">
				© 2023 EATLY All Rights Reserved.
			</div>
			<div class="footer__bottom-social mobile-hidden">
				<ul class="footer__bottom-social-list">
					<li
						class="footer__bottom-social-item"
						v-for="(social, index) in socials"
						:key="'social - ' + index"
					>
						<nuxt-link
							:to="social.link"
							class="footer__bottom-social-link"
						>
							<component
								:is="social.icon"
								class="footer__bottom-social-icon"
							/>
						</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	padding: 90px 95px 80px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 57px;
	color: $white;
	background-color: $black;

	@media (max-width: 1200px) {
		padding: 65px 68px 57px;
		gap: 40px;
	}

	@media (max-width: 850px) {
		padding: 52px 21px 36px 27px;
		gap: 40px;
	}

	&__left {
		@media (max-width: 850px) {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	&__top {
		padding-bottom: 25px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid $grey;

		@media (max-width: 1200px) {
			padding-bottom: 17px;
		}

		@media (max-width: 850px) {
			padding-bottom: 35px;
			flex-direction: column;
			gap: 56px;
			align-items: start;
		}

		&-logo {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		&-nav {
			&-list {
				display: flex;
				align-items: center;
				gap: 70px;

				@media (max-width: 1200px) {
					gap: 50px;
				}

				@media (max-width: 850px) {
					flex-direction: column;
					gap: 30px;
					align-items: start;
				}
			}

			&-item {
				position: relative;
				font-family: $secondaryFont;
				font-size: 17.83px;
				font-weight: 500;
				line-height: 26.74px;
				text-transform: uppercase;
				color: $lightGrey;
				transition: 0.3s;

				@media (max-width: 1200px) {
					font-size: 12.68px;
					line-height: 19.02px;
				}

				@media (max-width: 850px) {
					font-size: 14px;
					line-height: 18.88px;
				}

				&::after {
					content: "";
					position: absolute;
					bottom: -5px;
					left: 0;
					width: 0%;
					height: 1px;
					transition: 0.3s;
					background-color: $white;
				}

				&:hover {
					color: $white;
					&::after {
						width: 100%;
						transition: 0.3s;
					}
				}
			}
		}
	}

	&__bottom {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: $white;

		@media (max-width: 850px) {
			justify-content: center;
		}

		&-extra {
			font-family: $secondaryFont;
			font-size: 17px;
			font-weight: 500;
			line-height: 25px;
			color: $grey;

			@media (max-width: 1200px) {
				font-size: 12.09px;
				line-height: 17.78px;
			}

			@media (max-width: 850px) {
				font-size: 13.54px;
				line-height: 19.91px;
			}
		}

		&-social {
			&-list {
				display: flex;
				align-items: center;
				gap: 55px;
				color: $white;

				@media (max-width: 1200px) {
					gap: 38px;
				}

				@media (max-width: 850px) {
					gap: 20px;
				}
			}

			&-link {
				opacity: 0.5;
				transition: 0.3s ease;

				&:hover {
					opacity: 1;
					transition: 0.3s ease;
				}
			}

			&-icon {
				width: 20px;
				height: 20px;
			}
		}
	}
}
.mobile-hidden {
	display: block;
	@media (max-width: 850px) {
		display: none;
	}
}
.mobile-visible {
	display: none;
	@media (max-width: 850px) {
		display: block;
	}
}
</style>

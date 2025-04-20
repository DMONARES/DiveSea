<script setup>
import IconsInstaBl from "@/components/icons/instaBl.vue";
import IconsLinkedinBl from "@/components/icons/linkedinBl.vue";
import IconsFacebookBl from "@/components/icons/facebookBl.vue";
import IconsTwitterBl from "@/components/icons/twitterBl.vue";

const stats = [
	{
		title: "86 ETH",
		subtitle: "Total Sales",
	},
	{
		title: "12K",
		subtitle: "Followers",
	},
	{
		title: "587",
		subtitle: "Followings",
	},
];
const links = [
	{
		link: "/",
		icon: IconsInstaBl,
	},
	{
		link: "/",
		icon: IconsLinkedinBl,
	},
	{
		link: "/",
		icon: IconsFacebookBl,
	},
	{
		link: "/",
		icon: IconsTwitterBl,
	},
];
</script>

<template>
	<div class="proifle-info">
		<div class="proifle-info__statistic">
			<ul class="proifle-info__statistic-list">
				<li
					class="proifle-info__statistic-item"
					v-for="(stat, index) in stats"
				>
					<h3 class="proifle-info__statistic-title">
						{{ stat.title }}
					</h3>
					<p class="proifle-info__statistic-subtitle">
						{{ stat.subtitle }}
					</p>
				</li>
			</ul>
		</div>
		<div class="proifle-info__bio">
			<h2 class="proifle-info__bio-title">Bio</h2>
			<p class="proifle-info__bio-info">
				the artist who transforms the intangible into priceless assets
				with their incredible NFT creations. From stunning visuals to
				mind-bending concepts,
			</p>
		</div>
		<div class="proifle-info__social">
			<nuxt-link
				v-for="(link, index) in links"
				:key="'link - ' + index"
				:to="link.link"
				class="proifle-info__social-item"
			>
				<component :is="link.icon" />
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.proifle-info {
	max-width: 370px;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 30px;

	@media (max-width: 1200px) {
		margin-top: 30px;
	}

	&__statistic {
		margin-bottom: 70px;
		width: 100%;

		@media (max-width: 1200px) {
			margin-bottom: 50px;
		}

		&-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-title {
			margin-bottom: 5px;
			font-family: $publicSansFont;
			font-size: 32.15px;
			font-weight: 600;
			line-height: 40.19px;

			@media (max-width: 1200px) {
				font-size: 22.87px;
				line-height: 28.58px;
			}

			@media (max-width: 850px) {
				font-size: 24.4px;
				line-height: 30.5px;
			}
		}
		&-subtitle {
			font-family: $secondaryFont;
			font-size: 10.72px;
			font-weight: 500;
			line-height: 16.08px;
			color: $grey;

			@media (max-width: 1200px) {
				font-size: 7.62px;
				line-height: 11.43px;
			}

			@media (max-width: 850px) {
				font-size: 8.13px;
				line-height: 12.2px;
			}
		}
	}
	&__bio {
		padding-bottom: 85px;
		border-bottom: 1px solid $lightGrey;

		@media (max-width: 1200px) {
			padding-bottom: 60px;
		}

		@media (max-width: 850px) {
			padding-bottom: 65px;
		}

		&-title {
			margin-bottom: 5px;
			font-family: $publicSansFont;
			font-size: 25px;
			font-weight: 700;
			line-height: 40.19px;
			color: $lightGrey;

			@media (max-width: 1200px) {
				font-size: 17.78px;
				line-height: 28.58px;
			}

			@media (max-width: 850px) {
				font-size: 18.97px;
				line-height: 30.5px;
			}
		}
		&-info {
			font-size: 14px;
			font-weight: 400;
			line-height: 177%;
			letter-spacing: 0px;
			color: $grey;

			@media (max-width: 1200px) {
				font-size: 9.96px;
			}

			@media (max-width: 850px) {
				font-size: 10.62px;
			}
		}
	}
	&__social {
		display: flex;
		align-items: center;
		gap: 65px;
	}
}
</style>

<script setup>
const infoList = [
	{
		title: "430K+",
		description: "Art Works",
	},
	{
		title: "159K+",
		description: "Creators",
	},
	{
		title: "87K+",
		description: "Collections",
	},
];
</script>

<template>
	<MyContainer>
		<div class="hero">
			<div class="hero__content">
				<h1 class="hero__title">Discover And Create NFTs</h1>
				<p class="hero__description">
					Discover, Create and Sell NFTs On Our NFT Marketplace With
					Over Thousands Of NFTs And Get a <span>$20 bonus</span>.
				</p>
				<div class="hero__buttons">
					<UiButton>Explore More</UiButton>
					<UiButton :transpatent="true">create NFT</UiButton>
				</div>
				<div class="hero__info">
					<ul class="hero__info-list">
						<li
							class="hero__info-item"
							v-for="item in infoList"
							:key="item.id"
						>
							<h2 class="hero__info-title">{{ item.title }}</h2>
							<p class="hero__info-description">
								{{ item.description }}
							</p>
						</li>
					</ul>
				</div>
			</div>

			<!-- slider -->
			<div class="hero__slider slider">
				<IconsDecorDots class="slider__dots" />
				<HeroSlide />
				<UiSwiperNav class="slider__navigation" />
			</div>
		</div>
	</MyContainer>
</template>

<style lang="scss" scoped>
.hero {
	padding-top: 100px;
	display: flex;
	align-items: center;
	gap: 48px;

	&__content {
		margin-top: 10px;
		max-width: 568px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 15px;
	}
	&__title {
		font-size: 75px;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: -3px;
		text-transform: capitalize;
		color: $black;
	}
	&__description {
		margin-bottom: 30px;
		max-width: 500px;
		font-family: $outfitFont;
		font-size: 18px;
		font-weight: 300;
		line-height: 28px;
		letter-spacing: 0px;
		color: $grey;

		span {
			color: $black;
			font-weight: 600;
		}
	}
	&__buttons {
		margin-bottom: 67px;
		display: flex;
		align-items: center;
		gap: 23px;
	}
	&__info {
		&-list {
			display: flex;
			align-items: center;
			gap: 65px;
		}
		&-item {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 6px;
		}
		&-title {
			color: $black;
			font-family: $publicSansFont;
			font-size: 36.77px;
			font-weight: 600;
			line-height: 45.96px;
		}
		&-description {
			color: $grey;
			font-family: $secondaryFont;
			font-size: 12.26px;
			font-weight: 500;
			line-height: 18.39px;
		}
	}

	//slider
	&__slider {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.slider {
		&__dots {
			position: absolute;
			top: 0;
			right: 0;
			z-index: -1;
		}
		&__navigation {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>

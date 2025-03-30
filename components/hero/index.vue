<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { onMounted, ref } from "vue";

const slides = ["/img/nfts/1.png", "/img/nfts/2.png", "/img/nfts/3.png"];
const swiperInstance = ref(null);

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

onMounted(() => {
	if (swiperInstance.value) {
		const swiper = swiperInstance.value;
	}
});
</script>

<template>
	<div class="hero">
		<div class="hero__content">
			<h1 class="hero__title">Discover And Create NFTs</h1>
			<p class="hero__description">
				Discover, Create and Sell NFTs On Our NFT Marketplace With Over
				Thousands Of NFTs And Get a <span>$20 bonus</span>.
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

		<!-- slider wrapper -->
		<div class="slider-wrapper">
			<!-- slider -->
			<div class="hero__slider slider">
				<IconsDecorDots class="slider__dots" />
				<Swiper
					:modules="[Navigation, Autoplay]"
					:slides-per-view="1.2"
					:space-between="38"
					:loop="true"
					:autoplay="{ delay: 33000 }"
					:navigation="{
						nextEl: '.swiper-nav__button--next',
						prevEl: '.swiper-nav__button--prev',
					}"
					class="hero-swiper"
					@swiper="swiperInstance = $event"
				>
					<SwiperSlide
						v-for="(slide, index) in slides"
						:key="index"
						class="slide"
					>
						<img :src="slide" class="slide__img" alt="NFT Image" />
					</SwiperSlide>
				</Swiper>
				<UiSwiperNav class="slider__navigation" />
			</div>
			<div class="slider-mask-left"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	padding-top: 100px;
	padding-left: 100px;
	display: flex;
	align-items: center;
	gap: 50px;
	position: relative;

	&__content {
		margin-top: 10px;
		max-width: 568px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 15px;
		z-index: 100;
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
			bottom: 23px;
			left: 23%;
			transform: translateX(-50%);
			z-index: 100;
		}
	}
}

.slider-wrapper {
	position: relative;
	width: 100%;
	max-width: 500px;
	padding-top: 100px;
	padding-left: 10px;
	overflow: visible;
	margin-left: 30px;
}

.slider-mask-left {
	position: absolute;
	top: 0;
	left: -150%;
	width: 150%;
	height: 100%;
	background: linear-gradient(to right, white, white);
	z-index: 10;
	pointer-events: none;
}

.hero__slider {
	position: relative;
	width: 100%;
}

.hero-swiper {
	border-radius: 25px;
	overflow: visible;
}

:deep(.swiper-slide-active) {
	transform: translateY(-100px);
	transition: transform 0.5s ease;
}

.slide {
	max-width: 400px;
	max-height: 400px;
	border-radius: 25px;
	overflow: hidden;
	transition: transform 0.5s ease;
}

.slide__img {
	width: 100%;
	height: auto;
	border-radius: 25px;
	object-fit: cover;
}

:deep(.swiper-slide-active) .slide__img {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>

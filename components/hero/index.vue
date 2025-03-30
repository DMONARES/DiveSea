<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { onMounted, ref } from "vue";

const slides = [
	"/img/nfts/1.png",
	"/img/nfts/2.png",
	"/img/nfts/3.png",
	"/img/nfts/4.png",
	"/img/nfts/5.png",
	"/img/nfts/6.png",
];
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
		// Настройка навигации
		swiper.navigation.init();
		swiper.navigation.update();

		// Обработка изменения размера окна
		window.addEventListener("resize", () => {
			swiper.update();
		});
	}
});
</script>

<template>
	<div class="hero">
		<IconsDecorDots class="slider__dots" />
		<IconsDecorArrow class="slider__decor-arrow" />
		<div class="hero__content">
			<h1 class="hero__title">
				Discover And Create NFTs <span class="hero__title-span"></span>
			</h1>
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
			<div class="hero__rating">
				<div class="hero__rating-right">
					<IconsStar />
					<IconsTrustpilot />
				</div>
				<div class="hero__rating-left">
					<div class="hero__rating-stars">
						<IconsRating />
						<IconsRating />
						<IconsRating />
						<IconsRating />
						<IconsRating />
					</div>
					<span>4900+</span>
				</div>
			</div>
		</div>

		<!-- slider wrapper -->
		<div class="hero__slider slider-wrapper">
			<!-- slider -->
			<div class="slider">
				<Swiper
					:modules="[Navigation]"
					:space-between="38"
					:loop="false"
					:slides-per-view="1"
					:slides-per-group="1"
					:speed="500"
					:watch-overflow="true"
					:breakpoints="{
						320: {
							slidesPerView: 1,
							spaceBetween: 20,
							slidesPerGroup: 1,
						},
						640: {
							slidesPerView: 1,
							spaceBetween: 30,
							slidesPerGroup: 1,
						},
						1024: {
							slidesPerView: 1.2,
							spaceBetween: 38,
							slidesPerGroup: 1,
						},
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

	@media (max-width: 850px) {
		flex-direction: column;
		align-items: start;
		padding-top: 90px;
		padding-left: 32px;
		gap: 70px;
	}

	&__content {
		margin-top: 10px;
		max-width: 568px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 15px;
		z-index: 100;

		@media (max-width: 1200px) {
			max-width: 400px;
			gap: 10px;
		}
		@media (max-width: 850px) {
			max-width: unset;
		}
	}
	&__title {
		position: relative;
		font-size: 75px;
		font-weight: 600;
		line-height: 120%;
		letter-spacing: -3px;
		text-transform: capitalize;
		color: $black;

		@media (max-width: 1200px) {
			font-size: 53.34px;
			line-height: 120%;
			letter-spacing: -2.13px;
		}
		@media (max-width: 850px) {
			font-size: 47.4px;
			line-height: 120%;
			letter-spacing: -1.9px;
		}

		&-span {
			position: absolute;
			top: -20px;
			left: 0;
			width: 35%;
			height: 1px;
			background-color: $lightGrey;

			@media (max-width: 1200px) {
				top: -10px;
			}
		}
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

		@media (max-width: 1200px) {
			margin-bottom: 20px;
			font-size: 12.8px;
			line-height: 19.91px;
		}
		@media (max-width: 850px) {
			font-size: 11.38px;
			line-height: 17.7px;
		}

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

		@media (max-width: 1200px) {
			margin-bottom: 50px;
		}
		@media (max-width: 850px) {
			margin-bottom: 25px;
		}
	}
	&__info {
		display: block;

		@media (max-width: 850px) {
			display: none;
		}
		&-list {
			display: flex;
			align-items: center;
			gap: 65px;

			@media (max-width: 1200px) {
				gap: 45px;
			}
		}
		&-item {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 6px;

			@media (max-width: 1200px) {
				gap: 4px;
			}
		}
		&-title {
			color: $black;
			font-family: $publicSansFont;
			font-size: 36.77px;
			font-weight: 600;
			line-height: 45.96px;

			@media (max-width: 1200px) {
				font-size: 26.15px;
				line-height: 32.69px;
			}
		}
		&-description {
			color: $grey;
			font-family: $secondaryFont;
			font-size: 12.26px;
			font-weight: 500;
			line-height: 18.39px;

			@media (max-width: 1200px) {
				font-size: 8.72px;
				line-height: 13.08px;
			}
		}
	}

	&__rating {
		display: none;

		@media (max-width: 850px) {
			display: flex;
			align-items: center;
			gap: 20px;
		}
		&-right {
			display: flex;
			align-items: center;
			gap: 5px;

			svg:first-child {
				translate: 0 -3px;
			}
		}
		&-left {
			display: flex;
			align-items: center;
			gap: 10px;

			span {
				color: $grey;
				font-family: $urbanistFont;
				font-size: 12.81px;
				font-weight: 500;
				line-height: 19.22px;
			}
		}
		&-stars {
			display: flex;
			align-items: center;
			gap: 3px;
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

			@media (max-width: 850px) {
				bottom: 0;
				top: unset;
			}
		}
		&__decor-arrow {
			position: absolute;
			top: 0;
			right: 10%;
			z-index: -1;

			@media (max-width: 950px) {
				display: none;
			}
		}
		&__navigation {
			position: absolute;
			bottom: 23px;
			left: 23%;
			transform: translateX(-50%);
			z-index: 100;

			@media (max-width: 1200px) {
				bottom: -8px;
			}
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

	@media (max-width: 1200px) {
		max-width: 300px;
		padding-top: 50px;
		margin-left: 15px;
	}
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

	@media (max-width: 1200px) {
		left: -200%;
		width: 200%;
	}
}

.hero-swiper {
	overflow: visible;
}

:deep(.swiper-slide-active) {
	transform: translateY(-100px);
	transition: transform 0.5s ease;

	@media (max-width: 1200px) {
		transform: translateY(-50px);
	}
}

.slide {
	max-width: 400px;
	max-height: 400px;
	border-radius: 25px;
	overflow: hidden;
	transition: transform 0.5s ease;

	@media (max-width: 1200px) {
		max-width: 300px;
		max-height: 300px;
	}

	&__img {
		width: 100%;
		height: auto;
		border-radius: 25px;
		object-fit: cover;
	}
}
:deep(.swiper-slide-active) .slide__img {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>

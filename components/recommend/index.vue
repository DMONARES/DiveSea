<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useRecommendStore } from '~/stores/recommend';

const swiperInstancerecommend = ref(null);
const recommendStore = useRecommendStore();


const slides = recommendStore.slides;
const sales = recommendStore.sales;


onMounted(() => {
	if (swiperInstancerecommend.value) {
		const swiper = swiperInstancerecommend.value;
		swiper.navigation.init();
		swiper.navigation.update();

		window.addEventListener("resize", () => {
			swiper.update();
		});
	}
});
</script>

<template>
	<div class="recommend">
		<h2 class="recommend__title">Weekly - Top NFT</h2>

		<!-- slider -->
		<div class="recommend__slider-wr">
			<Swiper
				:modules="[Navigation]"
				:space-between="40"
				:slides-per-view="'auto'"
				:loop="false"
				:speed="500"
				:watch-overflow="true"
				class="recommend__slider slider"
				@swiper="swiperInstancerecommend = $event"
			>
				<SwiperSlide
					v-for="(slide, index) in slides"
					:key="'rec - ' + index"
					class="recommend__slide slider__slide slide"
				>
					<!-- slide content -->
					<div class="slide__wr">
						<div class="slide__image">
							<img :src="slide.img" alt="" class="slide__img" />
							<div class="slide__timer">
								{{ slide.timer }}
							</div>
						</div>
						<div class="slide__title">{{ slide.title }}</div>
						<div class="slide__content">
							<div class="slide__content-price">
								<div class="slide__content-current">
									Current bid
								</div>
								<div class="slide__content-cost">
									<IconsEthereum />
									<div class="slide__content-cost-price">
										{{ slide.price }}
									</div>
								</div>
							</div>
							<UiButton class="slide__content-button">
								PLACE BID
							</UiButton>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<UiSwiperNav
				class="slider__navigation"
				swiperClass=".recommend__slider"
			/>
		</div>

		<!-- Recent Viewed -->
		<div class="recommend__recent recent">
			<div class="recent__title">Recent Viewed</div>
			<IconsOptions class="recent__options" />
			<ul class="recent__list">
				<li
					class="recent__item"
					v-for="(sale, index) in sales"
					:key="index"
				>
					<div class="recent__left">
						<div class="recent__img">
							<img :src="sale.img" alt="" />
							<span class="recent__img-counter">{{
								sale.count
							}}</span>
						</div>
						<div class="recent__owner">
							<div class="recent__name">{{ sale.name }}</div>
							<div class="recent__nickname">
								{{ sale.nickname }}
							</div>
						</div>
					</div>

					<div class="recent__right">
						<div class="recent__price">
							<div class="recent__price-top">
								<IconsEthereum />
								<div class="recent__price-cost">
									{{ sale.cost }}
								</div>
							</div>
							<div
								class="recent__price-sale"
								:class="{
									'recent__price-sale--red':
										sale.sale.includes('-'),
									'recent__price-sale--green':
										sale.sale.includes('+'),
								}"
							>
								{{ sale.sale }}
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$red: #e23333;
$green: #10c452;

//recommend
.recommend {
	position: relative;
	padding: 90px 100px 90px;
	margin-top: 150px;
	background-color: #f1f1f1;

	@media (max-width: 1200px) {
		padding: 50px 80px 65px;
		margin-top: 150px;
	}

	@media (max-width: 700px) {
		padding: 57px 10px 55px;
		margin-top: 150px;
	}

	&__title {
		padding-bottom: 100px;
		margin: 0 auto;
		font-size: 45px;
		font-weight: 600;
		line-height: 26.92px;
		text-align: center;
		color: $lightGrey;

		@media (max-width: 1024px) {
			padding-bottom: 70px;
			font-size: 32px;
			line-height: 19.14px;
		}

		@media (max-width: 700px) {
			padding-bottom: 60px;
			font-size: 30px;
			line-height: 26.92px;
		}
	}
	&__slide {
		width: auto;
		max-width: 280px;
	}
}
//slider
.slider {
	&__navigation {
		margin: 115px auto 0;

		@media (max-width: 1024px) {
			margin: 80px auto 0;
		}

		@media (max-width: 700px) {
			margin: 60px auto 0;
		}
	}
}
//slide
.slide {
	&__wr {
		position: relative;
		max-width: 280px;
		width: 100%;
		padding: 14px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 15px;
		background-color: $white;
		border-radius: 23.48px;
		box-shadow: 38.82px 11.76px 58.81px 0px rgba(199, 199, 199, 0.6);
	}
	&__image {
		width: 253px;
		height: 253px;
		position: relative;
		overflow: hidden;
		border-radius: 23.48px;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	&__timer {
		position: absolute;
		top: 12px;
		right: 12px;
		padding: 8px 14px;
		background-color: rgba(28, 29, 32, 0.35);
		border: 1px solid $grey;
		border-radius: 9px;

		color: $white;
		font-size: 14.12px;
		font-weight: 500;
		line-height: 150%;
		letter-spacing: 0.12px;
	}
	&__title {
		font-size: 21.17px;
		font-weight: 600;
		line-height: 140%;
		color: $black;
	}
	&__content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__content-current {
		color: $lightBlue;
		font-size: 14.12px;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: 0.12px;
	}
	&__content-cost {
		display: flex;
		align-items: center;
		gap: 3px;
	}
	&__content-cost-price {
		font-size: 16.47px;
		font-weight: 500;
		line-height: 150%;
		color: $black;
	}
}
//recent
.recent {
	position: absolute;
	bottom: -115px;
	right: 100px;
	max-width: 365px;
	width: 100%;
	padding: 25px;
	border-radius: 23.48px;
	background-color: $white;

	@media (max-width: 1200px) {
		bottom: -80px;
		right: 15px;
		max-width: 265px;
		padding: 18px;
	}

	@media (max-width: 700px) {
		display: none;
	}

	&__title {
		margin-bottom: 27px;
		font-size: 21px;
		font-weight: 600;
		line-height: 135%;
		letter-spacing: 0.2px;
		color: $black;

		@media (max-width: 1200px) {
			margin-bottom: 20px;
			font-size: 14.93px;
			line-height: 135%;
			letter-spacing: 0.14px;
		}
	}
	&__options {
		position: absolute;
		top: 30px;
		right: 30px;
		cursor: pointer;
		z-index: 100;

		@media (max-width: 1200px) {
			top: 20px;
			right: 20px;
		}
	}
	&__list {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 20px;
	}
	&__item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__left {
		display: flex;
		align-items: center;
		gap: 22px;

		@media (max-width: 1200px) {
			gap: 15px;
		}
	}
	&__img {
		position: relative;
		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;

			@media (max-width: 1200px) {
				width: 30px;
				height: 30px;
			}
		}

		&-counter {
			position: absolute;
			bottom: -5px;
			right: -5px;
			width: 21px;
			height: 21px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $white;
			border-radius: 50%;

			color: $black;
			font-size: 11.52px;
			font-weight: 700;
			line-height: 150%;

			@media (max-width: 1200px) {
				width: 15px;
				height: 15px;
				font-size: 8.19px;
				line-height: 150%;
				letter-spacing: 0.07px;
			}
		}
	}
	&__owner {
		display: flex;
		flex-direction: column;
		align-self: start;
		gap: 5px;
	}
	&__name {
		font-size: 15.36px;
		font-weight: 500;
		line-height: 140%;

		@media (max-width: 1200px) {
			font-size: 10.93px;
			line-height: 140%;
		}
	}
	&__nickname {
		font-size: 12.48px;
		font-weight: 400;
		line-height: 150%;
		color: $lightGrey;

		@media (max-width: 1200px) {
			font-size: 8.88px;
			line-height: 150%;
		}
	}
	&__right {
	}
	&__price {
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 7px;
	}
	&__price-top {
		display: flex;
		align-items: center;
		gap: 7px;

		@media (max-width: 1200px) {
			gap: 5px;
		}
	}
	&__price-cost {
		font-size: 15.36px;
		font-weight: 600;
		line-height: 140%;
		color: $black;

		@media (max-width: 1200px) {
			font-size: 10.93px;
			line-height: 140%;
		}
	}
	&__price-sale {
		font-size: 13.44px;
		font-weight: 400;
		line-height: 150%;

		@media (max-width: 1200px) {
			font-size: 9.56px;
			line-height: 150%;
		}

		&--red {
			color: $red;
		}
		&--green {
			color: $green;
		}
	}
}

.swiper {
	overflow: visible !important;
}
</style>

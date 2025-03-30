<script setup>
defineProps({
	disabled: {
		type: Boolean,
		default: false,
	},
});

const prevButton = ref(null);
const nextButton = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

onMounted(() => {
	const swiper = document.querySelector(".hero-swiper")?.swiper;
	if (swiper) {
		isBeginning.value = swiper.isBeginning;
		isEnd.value = swiper.isEnd;

		prevButton.value.addEventListener("click", () => swiper.slidePrev());
		nextButton.value.addEventListener("click", () => swiper.slideNext());

		swiper.on("slideChange", () => {
			isBeginning.value = swiper.isBeginning;
			isEnd.value = swiper.isEnd;
		});

		swiper.on("init", () => {
			isBeginning.value = swiper.isBeginning;
			isEnd.value = swiper.isEnd;
		});
	}
});
</script>

<template>
	<div class="swiper-nav">
		<button
			ref="prevButton"
			class="swiper-nav__button swiper-nav__button--prev"
			:disabled="isBeginning || disabled"
		>
			<iconsSliderNav class="swiper-nav__icon swiper-nav__icon--prev" />
		</button>
		<span class="swiper-nav__span"></span>
		<button
			ref="nextButton"
			class="swiper-nav__button swiper-nav__button--next"
			:disabled="isEnd || disabled"
		>
			<iconsSliderNav class="swiper-nav__icon swiper-nav__icon--next" />
		</button>
	</div>
</template>

<style lang="scss" scoped>
.swiper-nav {
	max-width: 166px;
	width: 100%;
	max-height: 67px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $white;
	border-radius: 17.25px;
	box-shadow: 0px 43.12px 34.49px -28.87px rgba(15, 15, 15, 0.3);

	@media (max-width: 1200px) {
		max-width: 120px;
		max-height: 50px;
	}

	&__button {
		padding: 21px;
		cursor: pointer;
		transition: opacity 0.3s ease;

		@media (max-width: 1200px) {
			padding: 15px;
		}

		&:disabled {
			opacity: 0.5;
			pointer-events: none;
			cursor: not-allowed;
		}
	}
	&__button--next {
		rotate: 180deg;
	}
	&__icon--next {
		translate: 0px 1px;
	}
	&__span {
		background-color: $lightGrey;
		width: 2px;
		height: 26px;
		border-radius: 2px;

		@media (max-width: 1200px) {
			height: 20px;
		}
	}
}
</style>

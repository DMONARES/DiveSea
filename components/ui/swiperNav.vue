<script setup>
defineProps({
	disabled: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="swiper-nav">
		<button class="swiper-nav__button swiper-nav__button--prev" :disabled="true">
			<iconsSliderNav class="swiper-nav__icon swiper-nav__icon--prev" />
		</button>
		<span class="swiper-nav__span"></span>
		<button class="swiper-nav__button swiper-nav__button--next" :disabled="false">
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
	box-shadow: 0px 43.12px 34.49px -25.87px rgba(15, 15, 15, 0.3);

	&__button {
		padding: 21px;

		&:disabled {
			opacity: 0.5;
			pointer-events: none;
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
	}
}
</style>

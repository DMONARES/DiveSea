<script setup>
defineProps({
	card: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="slide__wr">
		<nuxt-link :to="`/product/${card.id}`" class="slide__image">
			<img
				:src="card.nftImage"
				:alt="card.nftName"
				class="slide__img"
				loading="lazy"
			/>
			<div class="slide__timer">
				{{ card.timer }}
			</div>
		</nuxt-link>
		<div class="slide__title">{{ card.nftName }}</div>
		<div class="slide__content">
			<div class="slide__content-price">
				<div class="slide__content-current">Current bid</div>
				<div class="slide__content-cost">
					<IconsEthereum />
					<div class="slide__content-cost-price">
						{{ card.price }}
					</div>
				</div>
			</div>
			<UiButton class="slide__content-button"> PLACE BID </UiButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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

		@media (max-width: 1200px) {
			max-width: 200px;
			padding: 10px;
			gap: 12px;
		}
	}
	&__image {
		width: 253px;
		height: 253px;
		position: relative;
		overflow: hidden;
		border-radius: 23.48px;

		@media (max-width: 1200px) {
			width: 180px;
			height: 180px;
		}
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

		@media (max-width: 1200px) {
			top: 8px;
			right: 8px;
			font-size: 10.07px;
		}
	}
	&__title {
		font-size: 21.17px;
		font-weight: 600;
		line-height: 140%;
		color: $black;

		@media (max-width: 1200px) {
			font-size: 15.11px;
		}
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

		@media (max-width: 1200px) {
			font-size: 10.07px;
			letter-spacing: 0.08px;
		}
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

		@media (max-width: 1200px) {
			font-size: 11.75px;
		}
	}
}
</style>

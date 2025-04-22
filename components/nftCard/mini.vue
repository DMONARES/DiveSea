<script setup>
defineProps({
	card: Object,
});
</script>

<template>
	<div class="card-mini">
		<div class="card-mini__image">
			<img :src="card.nftImage" alt="" />
			<IconsVerified />
		</div>
		<div class="card-mini__info">
			<div class="card-mini__name">{{ card.ownerName }}</div>
			<div class="card-mini__date">{{ card.date }}</div>
		</div>
		<div class="card-mini__price">
			<IconsEthereum />
			<div class="card-mini__price-value">{{ card.price }}</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card-mini {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	max-width: 400px;
	width: 100%;
	padding: 18px;
	border-radius: 12px;
	box-shadow: -5.85px 11.7px 20.26px 0px rgba(16, 16, 16, 0.15);
	&__image {
		position: relative;
		width: 63px;
		height: 63px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
		}

		svg {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	&__info {
	}
	&__name {
		font-size: 16.88px;
		font-weight: 500;
		line-height: 25.88px;
	}
	&__date {
		font-size: 14.63px;
		font-weight: 400;
		line-height: 18.01px;
		color: $lightGrey;
	}
	&__price {
		display: flex;
		align-items: center;
		gap: 2px;
		margin-left: 50px;

		&-value {
			font-size: 20.23px;
			font-weight: 500;
			line-height: 30px;
		}
	}
}
</style>

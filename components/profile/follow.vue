<script setup>
import { useProductsStore } from "~/stores/products";
import { computed } from "vue";

const props = defineProps({
	nickname: {
		type: String,
		default: "",
	},
});

const productsStore = useProductsStore();

const user = computed(() => {
	if (!props.nickname) {
		return productsStore.products[0] || {};
	}

	const foundUser = productsStore.products.find(
		(item) => String(item.nickname) === String(props.nickname)
	);

	return foundUser || productsStore.products[0] || {};
});
</script>

<template>
	<div class="profile-follow">
		<img :src="user.ownerAva" alt="" class="profile-follow__image" />
		<div class="profile-follow__content">
			<div class="profile-follow__content-user">
				<div class="profile-follow__content-user-name">
					{{ user.ownerName }}
				</div>
				<div class="profile-follow__content-user-tag">
					@{{ user.nickname }}
				</div>
			</div>
			<UiButton>FOLLOW +</UiButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.profile-follow {
	max-width: 370px;
	width: 100%;
	margin-top: -120px;
	padding-bottom: 40px;
	border-bottom: 1px solid $lightGrey;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;

	@media (max-width: 1200px) {
		max-width: 260px;
		padding-bottom: 30px;
	}

	&__image {
		width: 115px;
		height: 115px;
		border-radius: 50%;
		border: 5px solid $white;
		overflow: hidden;
	}
	&__content {
		width: 100%;
		display: flex;
		align-items: start;
		justify-content: space-between;

		&-user {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 4px;
			font-family: $outfitFont;

			&-name {
				font-size: 35px;
				font-weight: 600;
				line-height: 130%;

				@media (max-width: 1200px) {
					font-size: 24.89px;
				}

				@media (max-width: 850px) {
					font-size: 26.56px;
				}
			}
			&-tag {
				font-size: 18px;
				font-weight: 400;
				line-height: 130%;
				color: $lightGrey;

				@media (max-width: 1200px) {
					font-size: 12.8px;
				}

				@media (max-width: 850px) {
					font-size: 13.66px;
				}
			}
		}
	}
}
</style>

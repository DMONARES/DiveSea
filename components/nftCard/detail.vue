<script setup>
defineProps({
	product: Object,
});
</script>

<template>
	<client-only>
		<section class="product-detail">
			<div class="product-detail__wrapper">
				<div class="product-detail__img">
					<img :src="product.img" alt="" />
				</div>
				<div class="product-detail__content">
					<div class="product-detail__content-head">
						<h1 class="product-detail__content-head-title">
							Project {{ product.title }}
						</h1>
						<p class="product-detail__content-head-description">
							{{ product.description }}
						</p>
					</div>
					<div class="product-detail__content-info">
						<!-- users -->
						<div class="product-detail__content-info-users">
							<!-- creator -->
							<div class="product-detail__content-info-user">
								<div
									class="product-detail__content-info-user-img"
								>
									<img :src="product.creatorAva" alt="" />
								</div>
								<div
									class="product-detail__content-info-user-info"
								>
									<div
										class="product-detail__content-info-user-subtitle"
									>
										Created by
									</div>
									<nuxt-link
										to="/"
										class="product-detail__content-info-user-name"
									>
										{{ product.creatorName }}
									</nuxt-link>
								</div>
							</div>
							<!-- owner -->
							<div class="product-detail__content-info-user">
								<div
									class="product-detail__content-info-user-img"
								>
									<img :src="product.ownerAva" alt="" />
								</div>
								<div
									class="product-detail__content-info-user-info"
								>
									<div
										class="product-detail__content-info-user-subtitle"
									>
										Owned by
									</div>
									<nuxt-link
										to="/"
										class="product-detail__content-info-user-name"
									>
										{{ product.ownerName }}
									</nuxt-link>
								</div>
							</div>
						</div>
						<!-- price -->
						<div class="product-detail__content-info-price">
							<div
								class="product-detail__content-info-price-left"
							>
								<p
									class="product-detail__content-info-price-subtitle"
								>
									Current Bid
								</p>
								<div
									class="product-detail__content-info-price-cost"
								>
									<IconsEthereum />
									<span>{{ product.price }}</span>
								</div>
							</div>
							<div
								class="product-detail__content-info-price-right"
							>
								<p
									class="product-detail__content-info-price-subtitle"
								>
									End in
								</p>
								<div
									class="product-detail__content-info-price-date"
								>
									{{ product.timer }}
								</div>
							</div>
						</div>
						<!-- button -->
						<UiButton class="product-detail__content-info-button">
							<IconsWallet />
							Place Bid
						</UiButton>
					</div>
				</div>
			</div>
		</section>
	</client-only>
</template>

<style lang="scss" scoped>
.product-detail {
	margin: 55px auto 130px;
	padding: 0 96px;
	&__wrapper {
		padding: 38px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 50px;
		background-color: $white;
		border-radius: 24.42px;
		box-shadow: 17.56px 17.56px 61.06px 0px rgba(0, 0, 0, 0.12);
	}
	&__img {
		width: 50%;
		img {
			width: 560px;
			height: 560px;
		}
	}
	&__content {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 70px;
		&-head {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 30px;
			&-title {
				font-size: 51.04px;
				font-weight: 600;
				line-height: 31.82px;
			}
			&-description {
				font-size: 19px;
				font-weight: 400;
				line-height: 29.14px;
				color: $lightGrey;
			}
		}
		&-info {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 55px;
			&-users {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			&-user {
				display: flex;
				align-items: center;
				gap: 20px;
				&-img {
					width: 65px;
					height: 65px;
					border-radius: 50%;
				}
				&-info {
					display: flex;
					flex-direction: column;
					align-items: start;
				}
				&-subtitle {
					font-size: 17.68px;
					font-weight: 400;
					line-height: 27px;
					color: $lightGrey;
				}
				&-name {
					position: relative;
					font-size: 25.57px;
					font-weight: 500;
					line-height: 39.2px;

					&::after {
						content: '';
						position: absolute;
						bottom: -2px;
						left: 0;
						width: 0;
						height: 2px;
						background-color: $black;
						transition: .3s ease;
					}

					&:hover::after {
						width: 100%;
					}
				}
			}
			&-price {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				&-left {
					display: flex;
					flex-direction: column;
					align-items: start;
					gap: 7px;
				}
				&-subtitle {
					font-size: 17.86px;
					font-weight: 400;
					line-height: 21.98px;
					color: $lightGrey;
				}
				&-cost {
					display: flex;
					align-items: center;
					font-size: 32.99px;
					font-weight: 600;
					line-height: 49px;

					svg {
						width: 32px;
						height: 45px;
					}
				}
				&-right {
					display: flex;
					flex-direction: column;
					align-items: end;
					gap: 7px;
				}
				&-date {
					font-size: 19.23px;
					font-weight: 400;
					line-height: 30.23px;
				}
			}
			&-button {
				width: 100%;
			}
		}
	}
}
</style>

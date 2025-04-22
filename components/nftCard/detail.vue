<script setup>
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();
const popupCards = productsStore.products.slice(0, 3);

defineProps({
	product: Object,
});

const isOpen = ref(false);
</script>

<template>
	<client-only>
		<section class="product-detail">
			<div class="product-detail__wrapper">
				<div class="product-detail__img">
					<img
						:src="product.nftImage"
						:alt="product.nftName"
						loading="lazy"
					/>
				</div>
				<div class="product-detail__content">
					<div class="product-detail__content-head">
						<h1 class="product-detail__content-head-title">
							{{ product.nftName }}
						</h1>
						<p class="product-detail__content-head-description">
							{{ product.nftDescription }}
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
									<img
										:src="product.creatorAva"
										:alt="product.creatorName"
										loading="lazy"
									/>
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
										:to="`/profile/${product.nickname}`"
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
									<img
										:src="product.ownerAva"
										:alt="product.ownerName"
										loading="lazy"
									/>
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
										:to="`/profile/${product.nickname}`"
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
						<UiButton
							class="product-detail__content-info-button"
							@click="isOpen = true"
						>
							<IconsWallet />
							Place Bid
						</UiButton>
					</div>
				</div>
			</div>
			<UiPopup
				class="product-detail__popup"
				v-if="isOpen"
				:isOpen="isOpen"
				@close="isOpen = false"
			>
				<h3 class="product-detail__popup-title">History of Bid</h3>
				<p class="product-detail__popup-date">Oct 14, 2022</p>
				<ul class="product-detail__popup-list">
					<li
						class="product-detail__popup-item"
						v-for="(card, index) in popupCards"
						:key="index"
					>
						<NftCardMini :card="card" />
					</li>
				</ul>
				<h3 class="product-detail__popup-title">Your Bid</h3>
				<UiCryptoInput class="product-detail__popup-input" />
				<UiButton class="product-detail__popup-button">Submit</UiButton>
			</UiPopup>
		</section>
	</client-only>
</template>

<style lang="scss" scoped>
.product-detail {
	margin: 0 auto 130px;
	padding: 0 96px;

	@media (max-width: 1200px) {
		margin: 0 auto 95px;
		padding: 0 70px;
	}
	@media (max-width: 950px) {
		margin: 70px auto 85px;
		padding: 0 32px;
	}

	&__wrapper {
		padding: 38px;
		display: flex;
		align-items: center;
		gap: 30px;
		background-color: $white;
		border-radius: 24.42px;
		box-shadow: 17.56px 17.56px 61.06px 0px rgba(0, 0, 0, 0.12);

		@media (max-width: 1200px) {
			padding: 26px;
		}
		@media (max-width: 950px) {
			max-width: max-content;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			padding: 15px;
		}
	}
	&__img {
		width: 50%;

		@media (max-width: 950px) {
			width: max-content;
		}

		img {
			width: 100%;
			max-width: 560px;
			max-height: 560px;

			@media (max-width: 1200px) {
				max-width: 400px;
				max-height: 400px;
			}
			@media (max-width: 750px) {
				max-width: 280px;
				max-height: 280px;
			}
		}
	}
	&__content {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 70px;

		@media (max-width: 1200px) {
			gap: 50px;
		}
		@media (max-width: 950px) {
			width: 100%;
			align-items: center;
			gap: 60px;
		}

		&-head {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 30px;

			@media (max-width: 1200px) {
				gap: 20px;
			}
			@media (max-width: 950px) {
				gap: 5px;
			}

			&-title {
				font-size: 51.04px;
				font-weight: 600;
				line-height: 31.82px;

				@media (max-width: 1200px) {
					font-size: 36.3px;
					line-height: 22.63px;
				}
				@media (max-width: 750px) {
					font-size: 15.64px;
					line-height: 22.59px;
				}
			}
			&-description {
				font-size: 19px;
				font-weight: 400;
				line-height: 29.14px;
				color: $lightGrey;

				@media (max-width: 1200px) {
					font-size: 13.51px;
					line-height: 20.72px;
				}
				@media (max-width: 750px) {
					font-size: 13.03px;
					line-height: 19.98px;
				}
			}
		}
		&-info {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 55px;

			@media (max-width: 1200px) {
				gap: 40px;
			}

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

				@media (max-width: 1200px) {
					gap: 12px;
				}
				@media (max-width: 950px) {
					gap: 8px;
				}

				&-img {
					width: 65px;
					height: 65px;
					border-radius: 50%;

					img {
						width: 65px;
						height: 65px;
						border-radius: 50%;

						@media (max-width: 1200px) {
							width: 47px;
							height: 47px;
						}
						@media (max-width: 950px) {
							width: 33px;
							height: 33px;
						}
					}

					@media (max-width: 1200px) {
						width: 47px;
						height: 47px;
					}
					@media (max-width: 950px) {
						width: 33px;
						height: 33px;
					}
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

					@media (max-width: 1200px) {
						font-size: 12.57px;
						line-height: 19px;
					}
					@media (max-width: 750px) {
						font-size: 9.01px;
						line-height: 14px;
					}
				}
				&-name {
					position: relative;
					font-size: 25.57px;
					font-weight: 500;
					line-height: 39.2px;

					@media (max-width: 1200px) {
						font-size: 18.18px;
						line-height: 27.88px;
					}
					@media (max-width: 750px) {
						font-size: 13.03px;
						line-height: 19.98px;
					}

					&::after {
						content: "";
						position: absolute;
						bottom: -2px;
						left: 0;
						width: 0;
						height: 2px;
						background-color: $black;
						transition: 0.3s ease;
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

					@media (max-width: 1200px) {
						font-size: 12.7px;
						line-height: 15.63px;
					}
					@media (max-width: 750px) {
						font-size: 10.55px;
						line-height: 12.98px;
					}
				}
				&-cost {
					display: flex;
					align-items: center;
					font-size: 32.99px;
					font-weight: 600;
					line-height: 49px;

					@media (max-width: 1200px) {
						font-size: 23.46px;
						line-height: 35px;
					}
					@media (max-width: 750px) {
						font-size: 19.48px;
						line-height: 29px;
					}

					svg {
						width: 32px;
						height: 45px;

						@media (max-width: 1200px) {
							width: 22px;
							height: 35px;
						}
						@media (max-width: 750px) {
							width: 15px;
							height: 23px;
						}
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

					@media (max-width: 1200px) {
						font-size: 13.68px;
						line-height: 21.5px;
					}
					@media (max-width: 750px) {
						font-size: 11.36px;
						line-height: 17.85px;
					}
				}
			}
			&-button {
				width: 100%;
			}
		}
	}
	.product-detail__popup {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		&-title {
			align-self: start;
			font-size: 20.26px;
			font-weight: 600;
			line-height: 29.26px;

			&:not(:first-child) {
				margin-bottom: 15px;
			}
		}
		&-date {
			align-self: start;
			margin-bottom: 10px;
			font-size: 14.63px;
			font-weight: 400;
			line-height: 18.01px;
			color: $lightGrey;
		}
		&-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			gap: 20px;
			margin-bottom: 40px;
		}
		&-input {
			margin-bottom: 20px;
		}
		&-button {
		}
	}
}
</style>

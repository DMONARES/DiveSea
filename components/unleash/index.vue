<script setup>
import { useProductsStore } from "~/stores/products";

const swiperInstancerecommend = ref(null);
const productsStore = useProductsStore();

const followingStatus = ref({});

const toggleFollow = (index) => {
	followingStatus.value[index] = !followingStatus.value[index];
};

const items = [
	{ text: "Best Seller All Around World" },
	{ text: "$2M+ Transections Every Day" },
	{ text: "Secure Transactions" },
	{ text: "Exclusive Collections From Sellers" },
	{ text: "Easy Buying and Selling" },
	{ text: "Join Our Community" },
];


const bestsellers = computed(() => productsStore.products.slice(0, 6));
const sales = computed(() => productsStore.products.slice(0, 2));
</script>

<template>
	<div class="unleash">
		<div class="unleash__content">
			<div class="unleash__left">
				<h2 class="unleash__left-title">
					Just Unleash -<br /><span>Your Inner Collector</span>
				</h2>
				<ul class="unleash__left-list">
					<li
						class="unleash__left-item"
						v-for="(item, index) in items"
						:key="'item-' + index"
					>
						<IconsCheckedList />
						<p class="unleash__left-item-text">{{ item.text }}</p>
					</li>
				</ul>
				<nuxt-link to="/" class="unleash__left-link">
					Explore More
					<IconsArrowRight />
				</nuxt-link>
			</div>

			<div class="unleash__right">
				<div class="unleash__right-mini">
					<div class="unleash__right-mini-check">
						<IconsDot />
						<div class="unleash__right-mini-check-image">
							<img src="/img/mini/1.png" alt="" />
							<IconsVerified
								class="unleash__right-mini-check-image-icon"
							/>
						</div>
					</div>
					<div class="unleash__right-mini-info">
						<div class="unleash__right-mini-info-name">
							New bid <span>Rotation</span>
						</div>
						<div class="unleash__right-mini-info--price">
							0.002 ETH
						</div>
						<div class="unleash__right-mini-info-date">
							6 Oct 2022, 11:44 PM
						</div>
					</div>
					<div class="unleash__right-mini-image">
						<img src="/img/nfts/1.png" alt="" />
					</div>
				</div>

				<div class="unleash__right-bestsellers">
					<div class="unleash__right-bestsellers-title">
						Best Sellers
					</div>
					<ul class="unleash__right-bestsellers-list">
						<li
							class="unleash__right-bestsellers-item"
							v-for="(bestseller, index) in bestsellers"
							:key="'bestseller-' + index"
						>
							<div class="unleash__right-bestsellers-item-image">
								<img
									:src="bestseller.miniImage"
									alt=""
									class="unleash__right-bestsellers-item-image"
								/>
								<span
									class="unleash__right-bestsellers-item-counter"
								>
									{{ index + 1 }}
								</span>
							</div>
							<div class="unleash__right-bestsellers-item-user">
								<div
									class="unleash__right-bestsellers-item-user-name"
								>
									{{ bestseller.creatorName }}
								</div>
								<div
									class="unleash__right-bestsellers-item-user-tag"
								>
									@{{ bestseller.nickname }}
								</div>
							</div>
							<button
								class="unleash__right-bestsellers-item-button"
								:class="{ unfollow: followingStatus[index] }"
								@click="toggleFollow(index)"
							>
								{{
									followingStatus[index]
										? "Unfollow"
										: "Follow"
								}}
							</button>
						</li>
					</ul>
				</div>

				<div class="unleash__right-recent recent">
					<div class="recent__title">Recent Viewed</div>
					<ul class="recent__list">
						<li
							class="recent__item"
							v-for="(sale, index) in sales"
							:key="index"
						>
							<div class="recent__left">
								<div class="recent__img">
									<img :src="sale.miniImage" alt="" />
									<span class="recent__img-counter">
										{{ index + 1 }}
									</span>
								</div>
								<div class="recent__owner">
									<div class="recent__name">
										{{ sale.nftName }}
									</div>
									<div class="recent__nickname">
										@{{ sale.nickname }}
									</div>
								</div>
							</div>

							<div class="recent__right">
								<div class="recent__price">
									<div class="recent__price-top">
										<IconsEthereum />
										<div class="recent__price-cost">
											{{ sale.price }}
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
		</div>
	</div>
</template>

<style lang="scss" scoped>
* {
	transition: all 0.3s ease;
}
.unleash {
	position: relative;
	margin-top: 100px;
	margin-bottom: 210px;
	padding: 0 96px;
	padding-top: 75px;

	@media (max-width: 1200px) {
		margin-top: 70px;
		margin-bottom: 150px;
		padding: 0 70px;
		padding-top: 50px;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		height: 1px;
		background-color: $lightGrey;
	}

	&__content {
		display: flex;
		align-items: center;
		gap: 100px;
		flex-direction: row;

		@media (max-width: 1200px) {
			gap: 70px;
		}
		@media (max-width: 850px) {
			flex-direction: column;
			gap: 30px;
			align-items: start;
		}
	}
	&__left {
		max-width: 500px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 45px;

		@media (max-width: 1200px) {
			max-width: 350px;
			gap: 30px;
		}

		&-title {
			font-size: 45px;
			font-weight: 600;
			line-height: 54.4px;
			text-transform: capitalize;
			color: $lightGrey;

			@media (max-width: 1200px) {
				font-size: 32px;
				line-height: 38.69px;
			}
			@media (max-width: 850px) {
				font-size: 30px;
				line-height: 37.11px;
			}

			span {
				color: $black;
			}
		}
		&-list {
			display: flex;
			flex-direction: column;
			gap: 12px;
			align-items: flex-start;

			@media (max-width: 1200px) {
				gap: 8px;
			}
		}
		&-item {
			display: flex;
			align-items: center;
			gap: 12px;

			@media (max-width: 1200px) {
				gap: 8px;
			}

			&-text {
				font-size: 16px;
				font-weight: 400;
				line-height: 32px;
				color: $grey;

				@media (max-width: 1200px) {
					font-size: 11.38px;
					line-height: 22.76px;
				}
			}

			&:last-child {
				margin-bottom: 25px;

				@media (max-width: 1200px) {
					margin-bottom: 20px;
				}
			}
		}
		&-link {
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 18px 30px;
			background-color: $black;
			border: 1.5px solid $black;
			border-radius: 23px;
			transition: 0.3s ease-in-out;
			cursor: pointer;
			font-family: $primaryFont;
			font-size: 16.27px;
			font-weight: 500;
			line-height: 24px;
			text-transform: capitalize;
			color: $white;
			position: relative;

			@media (max-width: 1200px) {
				padding: 11px 17px;
				font-size: 11.5px;
				line-height: 17.25px;
			}
			@media (max-width: 850px) {
				font-size: 11.07px;
				line-height: 13.84px;
			}

			&:hover {
				opacity: 0.8;
			}
		}
	}
	&__right {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;

		&-mini {
			position: absolute;
			top: -43px;
			right: 0;
			padding: 11px;
			display: flex;
			align-items: center;
			gap: 12px;
			background-color: $white;
			border-radius: 13px;
			box-shadow: 0px 18.99px 28.48px 0px rgba(70, 70, 70, 0.1);
			backdrop-filter: blur(30.38px);
			background: linear-gradient(
				225.57deg,
				rgb(252, 252, 253) -0.957%,
				rgba(252, 252, 253, 0.6) 100%
			);

			@media (max-width: 1200px) {
				padding: 8px;
				gap: 8px;
				right: 2%;
			}
			@media (max-width: 1100px) {
				display: none;
			}

			&-check {
				display: flex;
				align-items: center;
				gap: 15px;

				@media (max-width: 1200px) {
					gap: 8px;
				}

				&-image {
					position: relative;

					img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						overflow: hidden;

						@media (max-width: 1200px) {
							width: 28px;
							height: 28px;
						}
					}

					&-icon {
						position: absolute;
						top: -5px;
						right: -5px;
					}
				}
			}
			&-info {
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				&-name {
					font-family: Poppins;
					font-size: 13.29px;
					font-weight: 500;
					line-height: 22.79px;
					color: grey;

					@media (max-width: 1200px) {
						font-size: 13.29px;
						line-height: 22.79px;
					}

					span {
						color: $black;
					}
				}
				&--price {
					font-size: 12px;
					font-weight: 600;
					line-height: 19px;

					@media (max-width: 1200px) {
						font-size: 11.39px;
						line-height: 18.99px;
					}
				}
				&-date {
					font-weight: 500;
					font-size: 12px;
					line-height: 19px;
					color: $grey;

					@media (max-width: 1200px) {
						font-size: 11.39px;
						line-height: 18.99px;
					}
				}
			}
			&-image {
				max-width: 60px;
				max-height: 60px;
				margin-left: 5px;
			}
		}
		&-bestsellers {
			max-width: 330px;
			width: 100%;
			margin-left: 50%;
			padding: 25px 20px;
			border-radius: 14px;
			box-shadow: 8.82px 8.82px 44.12px 0px rgba(20, 20, 22, 0.1);

			@media (max-width: 1440px) {
				margin-left: 25%;
			}
			@media (max-width: 1200px) {
				max-width: 230px;
				padding: 18px 13px;
			}
			@media (max-width: 850px) {
				display: none;
			}

			&-title {
				margin-bottom: 24px;
				font-size: 18.53px;
				font-weight: 600;
				line-height: 135%;
				letter-spacing: 0.18px;

				@media (max-width: 1200px) {
					font-size: 13.18px;
					letter-spacing: 0.13px;
				}
			}
			&-list {
				display: flex;
				flex-direction: column;
				gap: 15px;

				@media (max-width: 1200px) {
					gap: 10px;
				}
			}
			&-item {
				width: 100%;
				display: flex;
				align-items: center;
				gap: 15px;

				@media (max-width: 1200px) {
					gap: 12px;
				}

				&-image {
					position: relative;
					width: 50px;
					height: 50px;
					border-radius: 50%;

					@media (max-width: 1200px) {
						width: 35px;
						height: 35px;
					}

					span {
						position: absolute;
						top: -5px;
						right: -5px;
						width: 21px;
						height: 21px;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 12px;
						font-weight: 600;
						line-height: 20px;
						color: $white;
						background-color: $black;
						z-index: 10;

						@media (max-width: 1200px) {
							top: -2px;
							right: -2px;
							width: 14px;
							height: 14px;
							font-size: 10px;
							line-height: 14px;
						}
					}
				}
				&-user {
					display: flex;
					flex-direction: column;
					align-items: flex-start;

					&-name {
						font-size: 14px;
						font-weight: 500;
						line-height: 24px;

						@media (max-width: 1200px) {
							font-size: 12px;
							line-height: 18px;
						}
					}
					&-tag {
						font-size: 12px;
						font-weight: 400;
						line-height: 20px;
						color: $grey;

						@media (max-width: 1200px) {
							font-size: 10px;
							line-height: 14px;
						}
					}
				}
				&-button {
					margin-left: auto;
					padding: 8px 14px;
					border: 2px solid $lightGrey;
					border-radius: 12px;
					font-family: $dmsansFont;
					font-size: 14px;
					font-weight: 700;
					line-height: 16px;
					background-color: transparent;
					cursor: pointer;
					transition: all 0.3s ease;

					@media (max-width: 1200px) {
						padding: 5px 10px;
						font-size: 12px;
						line-height: 16px;
						border: 1.5px solid $lightGrey;
					}

					&.unfollow {
						background-color: $lightGrey;
					}
				}
			}
		}
	}
}
//recent
.recent {
	position: absolute;
	bottom: -115px;
	left: 21%;
	max-width: 365px;
	width: 100%;
	padding: 25px;
	border-radius: 23.48px;
	background-color: $white;
	box-shadow: 8.82px 8.82px 44.12px 0px rgba(20, 20, 22, 0.1);
	z-index: 100;

	@media (max-width: 1440px) {
		left: -3px;
	}

	@media (max-width: 1200px) {
		bottom: -80px;
		right: 15px;
		max-width: 265px;
		padding: 18px;
	}

	@media (max-width: 1060px) {
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
</style>

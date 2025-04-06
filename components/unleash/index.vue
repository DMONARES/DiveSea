<script setup>
import { useRecommendStore } from "~/stores/recommend";

const swiperInstancerecommend = ref(null);
const recommendStore = useRecommendStore();

const sales = recommendStore.sales;


const items = [
	{
		text: "Best Seller All Around World",
	},
	{
		text: "$2M+ Transections Every Day",
	},
	{
		text: "Secure Transactions",
	},
	{
		text: "Exclusive Collections From Sellers",
	},
	{
		text: "Easy Buying and Selling",
	},
	{
		text: "Join Our Community",
	},
];
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
						:key="'item - ' + index"
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
							<img src="#" alt="" />
							<IconsVerified />
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
						<img src="#" alt="" />
					</div>
				</div>

				<div class="unleash__right-bestsellers">
					<div class="unleash__right-bestsellers-title">
						Best Sellers
					</div>
					<ul class="unleash__right-bestsellers-list">
						<li class="unleash__right-bestsellers-item">
							<img
								src="#"
								alt=""
								class="unleash__right-bestsellers-item-image"
							/>
							<div class="unleash__right-bestsellers-item-user">
								<div
									class="unleash__right-bestsellers-item-user-name"
								>
									Alex Ca.
								</div>
								<div
									class="unleash__right-bestsellers-item-user-tag"
								>
									@Alexy
								</div>
							</div>
							<div class="unleash__right-bestsellers-item-button">
								Follow
							</div>
						</li>
					</ul>
				</div>

				<div class="unleash__right-recent recent">
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
									<div class="recent__name">
										{{ sale.name }}
									</div>
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
		</div>
	</div>
</template>

<style lang="scss" scoped>

.recent {
	// position: absolute;
	// bottom: -115px;
	// right: 100px;
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
</style>

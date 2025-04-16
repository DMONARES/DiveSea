<script setup>
import { useCollectionStore } from "~/stores/collection";

const collectionStore = useCollectionStore();
const recommendStore = useRecommendStore();

const titles = collectionStore.titles;
const items = collectionStore.items;

const userLinks = recommendStore.slides.find((item) => String(item.nickname));

const limitedItems = computed(() => {
	return collectionStore.items.slice(0, 4);
});
</script>

<template>
	<div>
		<div class="collection">
			<h2 class="collection__title">Top Collection</h2>

			<div class="collection__content">
				<table class="collection__table">
					<!-- head -->
					<thead>
						<tr class="collection__table-header">
							<th
								class="collection__table-header-item"
								v-for="(title, index) in titles"
								:key="'title-' + index"
								:class="{
									'collection-column': index === 0,
									'mobile-hidden': index > 1,
								}"
							>
								{{ title.title }}
							</th>
						</tr>
					</thead>

					<!-- content -->
					<tbody>
						<tr
							class="collection__table-row"
							v-for="(item, index) in limitedItems"
							:key="'item-' + index"
						>
							<td
								class="collection__table-item collection-column"
							>
								<div class="collection__table-item-user">
									<nuxt-link
										:to="`/profile/${userLinks.nickname}`"
										class="collection__table-item-user-link"
									>
										<img
											:src="item.img"
											alt=""
											class="collection__table-item-user-img"
										/>
										<span
											class="collection__table-item-user-count"
											>{{ index + 1 }}</span
										>
									</nuxt-link>
									<div class="collection__table-item-user-wr">
										<nuxt-link
											:to="`/profile/${userLinks.nickname}`"
										>
											<div
												class="collection__table-item-user-name"
											>
												{{ item.name }}
											</div>
										</nuxt-link>
										<nuxt-link
											:to="`/profile/${userLinks.nickname}`"
											:data-text="item.nickname"
											class="collection__table-item-user-nickname"
										>
											{{ item.nickname }}
										</nuxt-link>
									</div>
								</div>
							</td>
							<td class="collection__table-item">
								<div
									class="collection__table-item-volume-container"
								>
									<div class="collection__table-item-volume">
										<IconsEthereum class="etherium" />
										{{ item.volume }}
									</div>
									<div
										class="collection__table-item-sale mobile-sale"
										:class="{
											'collection__table-item-sale--red':
												item.sale.includes('-'),
											'collection__table-item-sale--green':
												item.sale.includes('+'),
										}"
									>
										{{ item.sale }}
									</div>
								</div>
							</td>
							<td class="collection__table-item mobile-hidden">
								<div
									class="collection__table-item-sale"
									:class="{
										'collection__table-item-sale--red':
											item.sale.includes('-'),
										'collection__table-item-sale--green':
											item.sale.includes('+'),
									}"
								>
									{{ item.sale }}
								</div>
							</td>
							<td class="collection__table-item mobile-hidden">
								<div class="collection__table-item-price">
									<IconsEthereum class="etherium" />
									{{ item.price }}
								</div>
							</td>
							<td class="collection__table-item mobile-hidden">
								<div class="collection__table-item-owners">
									{{ item.owners }}
								</div>
							</td>
							<td class="collection__table-item mobile-hidden">
								<div class="collection__table-item-items">
									{{ item.items }}
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<nuxt-link class="collection__more" to="/">
				Explore All
				<IconsArrowMore />
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$border: #ebe9e9;
* {
	transition: 0.2s;
}
.collection {
	margin-top: 240px;
	padding: 0 95px;

	@media (max-width: 1200px) {
		margin-top: 170px;
		padding: 0 65px;
	}

	@media (max-width: 850px) {
		margin-top: 80px;
		padding: 0 30px;
	}

	&__title {
		margin: 0 auto 90px;
		max-width: max-content;
		font-size: 45.04px;
		font-weight: 600;
		line-height: 44.75px;
		color: $black;

		@media (max-width: 1200px) {
			margin: 0 auto 65px;
			font-size: 32.03px;
			line-height: 31.83px;
		}
		@media (max-width: 850px) {
			margin: 0 auto 40px;
			font-size: 30px;
			line-height: 44.75px;
		}
	}
	&__table {
		margin-bottom: 85px;
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		table-layout: fixed;

		@media (max-width: 1200px) {
			margin-bottom: 60px;
		}
		@media (max-width: 850px) {
			margin-bottom: 40px;
		}

		&-header {
			width: 100%;

			&-item {
				padding-bottom: 20px;
				font-size: 22px;
				font-weight: 500;
				line-height: 130%;
				color: $lightGrey;
				text-wrap: nowrap;
				text-align: left;

				@media (max-width: 1200px) {
					font-size: 15.65px;
				}

				&.collection-column {
					width: 30%;
					padding-left: 50px;

					@media (max-width: 1200px) {
						padding-left: 30px;
					}

					@media (max-width: 850px) {
						width: 60%;
					}
					@media (max-width: 850px) {
						font-size: 14px;
					}
				}
			}
		}

		&-row {
			.collection__table-item {
				border-bottom: 1px solid $border;
			}
		}

		&-item {
			padding: 20px 10px;

			@media (max-width: 1200px) {
				padding: 20px 10px;
			}

			&.collection-column {
				padding-left: 50px;

				@media (max-width: 1200px) {
					padding-left: 30px;
				}
			}

			&-user {
				display: flex;
				align-items: center;
				gap: 25px;

				@media (max-width: 1200px) {
					gap: 18px;
				}
				&-link {
					position: relative;
				}

				&-img {
					position: relative;
					width: 70px;
					height: 70px;
					border-radius: 50%;
					object-fit: cover;

					@media (max-width: 1200px) {
						width: 50px;
						height: 50px;
					}
					@media (max-width: 850px) {
						width: 40px;
						height: 40px;
					}
				}
				&-count {
					position: absolute;
					bottom: -3px;
					right: -3px;
					width: 20px;
					height: 20px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: $black;
					background-color: $white;
					border-radius: 50%;
					font-size: 11.56px;
					font-weight: 700;
					line-height: 150%;

					@media (min-width: 850px) {
						display: none;
					}
				}
				&-wr {
					display: flex;
					flex-direction: column;
					align-items: start;
				}
				&-name {
					position: relative;
					font-size: 28.01px;
					font-weight: 500;
					line-height: 140%;
					color: $black;

					@media (max-width: 1200px) {
						font-size: 19.92px;
					}
					@media (max-width: 850px) {
						font-size: 15.41px;
					}

					&::after {
						content: "";
						position: absolute;
						bottom: 0;
						left: 0;
						height: 2px;
						width: 0;
						background-color: $black;
						transition: 0.3s ease;
					}

					&:hover::after {
						width: 100%;
						transition: 0.3s ease;
					}
				}
				&-nickname {
					font-size: 22.76px;
					font-weight: 400;
					line-height: 150%;
					color: $lightGrey;
					position: relative;
					display: inline-block;
					transition: color 0.3s ease;

					@media (max-width: 1200px) {
						font-size: 16.19px;
					}
					@media (max-width: 850px) {
						font-size: 12.52px;
					}

					&::after {
						content: attr(data-text);
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						z-index: 100;
						background: linear-gradient(
							270deg,
							#00f0ff,
							#ff00b5,
							#00f0ff,
							#94589e,
							#ff00b5,
							#00f0ff
						);
						background-size: 600% 100%;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;
						color: transparent;
						opacity: 0;
						transition: opacity 0.5s ease;
						pointer-events: none;
						animation: shimmer 6s ease-in-out infinite alternate;
					}

					&:hover::after {
						opacity: 1;
					}

					&:hover {
						color: transparent;
					}
				}
				@keyframes shimmer {
					0% {
						background-position: 0% 50%;
					}
					100% {
						background-position: 100% 50%;
					}
				}
			}
			&-volume-container {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 5px;
			}
			&-volume {
				display: flex;
				align-items: center;
				gap: 10px;
				font-size: 24.51px;
				font-weight: 600;
				line-height: 140%;
				color: $black;

				@media (max-width: 1200px) {
					gap: 2px;
					font-size: 17.43px;
				}
				@media (max-width: 850px) {
					font-size: 15.41px;
				}
			}
			&-sale {
				font-size: 24.51px;
				font-weight: 500;
				line-height: 130%;
				text-wrap: nowrap;

				@media (max-width: 1200px) {
					font-size: 17.43px;
				}
				@media (max-width: 850px) {
					font-size: 13.49px;
				}

				&--red {
					color: rgb(255, 0, 0);
				}
				&--green {
					color: rgb(16, 195, 82);
				}

				&.mobile-sale {
					display: none;

					@media (max-width: 850px) {
						display: block;
						font-size: 15px;
					}
				}
			}
			&-price {
				display: flex;
				align-items: center;
				gap: 10px;
				color: $black;
				font-size: 24.51px;
				font-weight: 600;
				line-height: 140%;

				@media (max-width: 1200px) {
					gap: 2px;
					font-size: 17.43px;
					line-height: 140%;
				}
			}
			&-owners {
				font-size: 23.65px;
				font-weight: 500;
				line-height: 130%;
				color: $black;

				@media (max-width: 1200px) {
					font-size: 16.82px;
					line-height: 130%;
				}
			}
			&-items {
				font-size: 23.65px;
				font-weight: 500;
				line-height: 130%;
				color: $black;

				@media (max-width: 1200px) {
					font-size: 16.82px;
					line-height: 130%;
				}
			}
		}
	}
	&__more {
		max-width: max-content;
		margin-left: auto;
		position: relative;
		display: flex;
		align-items: center;
		gap: 15px;
		justify-content: flex-end;
		font-size: 17.67px;
		font-weight: 500;
		line-height: 39.92px;
		letter-spacing: -0.09px;
		color: $lightGrey;

		@media (max-width: 1200px) {
			font-size: 12.57px;
			line-height: 28.39px;
		}
		@media (max-width: 850px) {
			margin: 0 auto;
			gap: 10px;
			font-size: 12.29px;
			line-height: 27.76px;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 0%;
			height: 1px;
			background-color: $lightGrey;
			transition: width 0.3s ease-in-out;
		}

		&:hover {
			&::after {
				width: 100%;
				transition: width 0.3s ease-in-out;
			}
		}

		svg {
			width: 15px;
			height: 15px;

			@media (max-width: 1200px) {
				width: 10px;
				height: 10px;
			}
		}
	}
}

.etherium {
	width: 30px;
	height: 30px;

	@media (max-width: 1200px) {
		width: 20px;
		height: 20px;
	}
	@media (max-width: 1200px) {
		width: 15px;
		height: 15px;
	}
}

.mobile-hidden {
	@media (max-width: 850px) {
		display: none;
	}
}
</style>

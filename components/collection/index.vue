<script setup>
import { useCollectionStore } from '~/stores/collection';

const collectionStore = useCollectionStore();

const titles = collectionStore.titles;
const items = collectionStore.items;

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
							<td class="collection__table-item collection-column">
								<div class="collection__table-item-user">
									<nuxt-link to="/">
										<img
											:src="item.img"
											alt=""
											class="collection__table-item-user-img"
										/>
									</nuxt-link>
									<div class="collection__table-item-user-wr">
										<nuxt-link to="/">
											<div
												class="collection__table-item-user-name"
											>
												{{ item.name }}
											</div>
										</nuxt-link>
										<div
											class="collection__table-item-user-nickname"
										>
											{{ item.nickname }}
										</div>
									</div>
								</div>
							</td>
							<td class="collection__table-item">
								<div class="collection__table-item-volume">
									<IconsEthereum class="etherium" />
									{{ item.volume }}
								</div>
							</td>
							<td class="collection__table-item">
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
							<td class="collection__table-item">
								<div class="collection__table-item-price">
									<IconsEthereum class="etherium" />
									{{ item.price }}
								</div>
							</td>
							<td class="collection__table-item">
								<div class="collection__table-item-owners">
									{{ item.owners }}
								</div>
							</td>
							<td class="collection__table-item">
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
.collection {
	margin-top: 240px;
	padding: 0 95px;
	&__title {
		margin: 0 auto 90px;
		max-width: max-content;
		font-size: 45.04px;
		font-weight: 600;
		line-height: 44.75px;
		color: $black;
	}
	&__table {
		margin-bottom: 85px;
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		table-layout: fixed; /* Добавлено для равномерного распределения ширины */

		&-header {
			width: 100%;
			margin-bottom: 50px;

			&-item {
				padding-bottom: 20px;
				font-size: 22px;
				font-weight: 500;
				line-height: 130%;
				color: $lightGrey;
				text-wrap: nowrap;
				text-align: left;
				
				&.collection-column {
					width: 30%; /* Первая колонка шире остальных */
					padding-left: 50px;
				}
			}
		}

		&-row {
			&:not(:last-child) {
				.collection__table-item {
					border-bottom: 1px solid $border;
				}
			}
		}

		&-item {
			padding: 20px 10px; /* Добавлен горизонтальный отступ для всех ячеек */
			
			&.collection-column {
				padding-left: 50px;
			}

			&-user {
				display: flex;
				align-items: center;
				gap: 25px;

				&-img {
					width: 70px;
					height: 70px;
					border-radius: 50%;
					object-fit: cover;
				}
				&-wr {
					display: flex;
					flex-direction: column;
					align-items: start;
				}
				&-name {
					font-size: 28.01px;
					font-weight: 500;
					line-height: 140%;
					color: $black;

					&:hover {
						text-decoration: underline;
					}
				}
				&-nickname {
					font-size: 22.76px;
					font-weight: 400;
					line-height: 150%;
					color: $lightGrey;
				}
			}
			&-volume {
				display: flex;
				align-items: center;
				gap: 10px;
				font-size: 24.51px;
				font-weight: 600;
				line-height: 140%;
				color: $black;
			}
			&-sale {
				font-size: 24.51px;
				font-weight: 500;
				line-height: 130%;
				text-wrap: nowrap;

				&--red {
					color: rgb(255, 0, 0);
				}
				&--green {
					color: rgb(16, 195, 82);
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
			}
			&-owners {
				font-size: 23.65px;
				font-weight: 500;
				line-height: 130%;
				color: $black;
			}
			&-items {
				font-size: 23.65px;
				font-weight: 500;
				line-height: 130%;
				color: $black;
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

		&::after {
			content: '';
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
	}
}

.etherium {
	width: 30px;
	height: 30px;
}
</style>

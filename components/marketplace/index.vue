<script setup>
import IconsCategory from '@/components/icons/category.vue'
import IconsCollection from '@/components/icons/collection.vue'
import IconsPrice from '@/components/icons/price.vue'

const filters = [
	{
		name: "Category",
		icon: IconsCategory,
	},
	{
		name: "Collection",
		icon: IconsCollection,
	},
	{
		name: "Price",
		icon: IconsPrice,
	},
];
</script>

<template>
	<div class="marketplace marketplace__container">
		<h2 class="marketplace__title">Explore Marketplace</h2>
		<div class="marketplace__filter">
			<ul class="marketplace__filter-list">
				<li class="marketplace__filter-item">
					<UiButton :transpatent="true" class="marketplace__filter-button"> All </UiButton>
				</li>
				<li
					class="marketplace__filter-item"
					v-for="(filter, index) in filters"
					:key="'filter - ' + index"
				>
					<UiButton :transpatent="true" class="marketplace__filter-button">
						<component :is="filter.icon" />
						{{ filter.name }}
					</UiButton>
				</li>
			</ul>
		</div>
		<div class="marketplace__content"></div>
		<nuxt-link class="marketplace__more" to="/">
			Explore All
			<IconsArrowMore />
		</nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
.marketplace {
	//marketplace

	// more
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
</style>

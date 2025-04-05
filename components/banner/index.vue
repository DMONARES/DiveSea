<script setup></script>

<template>
	<div class="banner">
		<div class="banner__content">
			<h2 class="banner__title">Create and Sell NFTs</h2>
			<p class="banner__subtitle">World’s Largest NFT Place</p>
			<div class="banner__buttons">
				<UiButton
					class="banner__buttons-item"
					:lilFont="true"
					bgColor="#FFF"
					fontColor="#141416"
				>
					Explore More
				</UiButton>
				<UiButton
					class="banner__buttons-item"
					:lilFont="true"
					bgColor="#141416"
					fontColor="#FFF"
					borderColor="#FFFFFF"
				>
					Sell Artwork
				</UiButton>
			</div>
		</div>
		<div class="banner__image-container">
			<div class="banner__image">
				<client-only>
					<img src="/img/large/1.png" alt="" />
				</client-only>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.banner {
	position: relative;
	margin: 180px 100px 160px;
	padding: 40px 40px 40px 65px;
	display: flex;
	align-items: start;
	justify-content: space-between;
	border-radius: 30px;
	background-color: $black;

	@media (max-width: 1200px) {
		margin: 130px 70px 110px;
		padding: 30px 30px 30px 45px;
		gap: 8px;
	}
	@media (max-width: 850px) {
		margin: 120px 30px 190px;
		padding: 22px 40px 82px 40px;
		gap: 6px;
		flex-direction: column;
		align-items: center;
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 13px;

		@media (max-width: 1200px) {
			gap: 8px;
		}
		@media (max-width: 850px) {
			align-items: center;
			gap: 8px;
		}
	}

	&__title {
		font-size: 45px;
		font-weight: 600;
		line-height: 130%;
		color: $white;

		@media (max-width: 1200px) {
			font-size: 32px;
		}
		@media (max-width: 850px) {
			font-size: 22.3px;
		}
	}

	&__subtitle {
		font-size: 20.27px;
		font-weight: 500;
		line-height: 130%;
		color: $grey;

		@media (max-width: 1200px) {
			font-size: 14.41px;
		}
		@media (max-width: 850px) {
			font-size: 10.04px;
		}
	}

	&__buttons {
		margin-top: 37px;
		display: flex;
		align-items: center;
		gap: 30px;

		@media (max-width: 1200px) {
			margin-top: 25px;
			gap: 20px;
		}
	}

	&__image {
		position: static;

		@media (max-width: 850px) {
			position: absolute;
			bottom: -200px;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			height: 100%;
		}
		&-container {
			position: relative;
			max-width: 370px;
			max-height: 250px;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			@media (max-width: 1200px) {
				max-width: 260px;
				max-height: 180px;
			}
		}

		img {
			position: relative;
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: 20px;
			z-index: 1;
		}

		&::after {
			content: "";
			position: absolute;
			inset: 0;
			background-image: url("/img/large/1.png");
			background-size: cover;
			background-position: center;
			border-radius: 20px;
			filter: blur(25px) brightness(1.2);
			transform: scale(1.1);
			z-index: 0;
			opacity: 0.7;
		}
	}
	&__image {
		@media (max-width: 850px) {
			width: 100%;
			height: auto;
		}
	}
}
</style>

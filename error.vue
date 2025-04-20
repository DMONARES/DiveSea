<script setup>
const props = defineProps({
	error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<Header />
	<MyContainer>
		<div class="error-page">
			<div class="error-page__content">
				<h1 class="error-page__code">{{ error.statusCode }}</h1>
				<div class="error-page__description">
					<p>Oops... The page you’re looking for can’t be found.</p>
				</div>
				<div class="error-page__button">
					<UiButton @click="handleError">
						Вернуться на главную
					</UiButton>
				</div>
			</div>
		</div>
	</MyContainer>
	<Footer />
</template>

<style lang="scss">
.error-page {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 60px 0;

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 600px;
		width: 100%;
	}

	&__code {
		font-family: $secondaryFont;
		font-size: 120px;
		font-weight: 700;
		line-height: 1;
		margin: 0 0 20px;
		background: linear-gradient(90deg, #000 0%, #666 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		@media (max-width: 768px) {
			font-size: 80px;
		}
	}

	&__message {
		font-family: $secondaryFont;
		font-size: 28px;
		font-weight: 500;
		margin: 0 0 20px;
		color: $black;
		text-transform: uppercase;

		@media (max-width: 768px) {
			font-size: 22px;
		}
	}

	&__description {
		margin-bottom: 40px;

		p {
			font-size: 18px;
			line-height: 1.6;
			color: $grey;

			@media (max-width: 768px) {
				font-size: 16px;
			}
		}
	}

	&__button {
		button {
			min-width: 200px;
		}
	}
}
</style>

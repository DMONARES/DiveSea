<script setup>
	const props = defineProps({
		error: Object
	});

	const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<div class="error-layout">
		<div class="error-layout__main-content container">
			<h1 class="error-layout__title">{{ error.statusCode }}</h1>

			<p class="error-layout__text">
				{{ error.statusMessage }}
			</p>

			<button
				@click="handleError"
			>
				Вернуться на главную
			</button>
		</div>
	</div>
</template>
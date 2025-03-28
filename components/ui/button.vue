<script setup>
	const props = defineProps({
		variant: String, // default, border
		size: String, // default, xl
		disabled: Boolean,
	});
</script>

<template>
	<button
		class="ui-button"
		:class="{
			'border': variant === 'border',
			'xl': size === 'xl',
		}"
		:disabled="disabled"
	>
		<slot />
	</button>
</template>

<style lang='scss'>
	.ui-button
	{
		// base styles
		cursor: pointer;
		border: none;
		padding: 12px 24px;
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: $black;
		color: $white;
		font-size: 1rem;

		@include transition();

		// effects
		&:disabled
		{
			pointer-events: none;
			opacity: .7;
		}
		&:hover { opacity: .8; }

		// sizes
		&.xl { padding: 20px 64px; }

		// variants
		&.border
		{
			background-color: transparent;
			border-color: $black;
			color: $black;

			&:hover
			{
				opacity: 1;
				background-color: $black;
				color: $white;
			}
		}
	}
</style>
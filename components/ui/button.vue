<script setup>
defineProps({
	disabled: {
		type: Boolean,
		default: false,
	},
	transpatent: {
		type: Boolean,
		default: false,
	},
	lilFont: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<button
		class="ui-button"
		:disabled="disabled"
		:class="{
			'ui-button--transpatent': transpatent,
			'ui-button--lil-font': lilFont,
		}"
	>
		<slot />
	</button>
</template>

<style lang="scss">
.ui-button {
	// base styles

	//button
	display: block;
	padding: 18px 30px;
	background-color: $black;
	border: 1.5px solid $black;
	border-radius: 23px;
	transition: 0.3s ease-in-out;
	cursor: pointer;

	//font
	font-family: $primaryFont;
	font-size: 16.27px;
	font-weight: 500;
	line-height: 24px;
	text-transform: capitalize;
	color: $white;

	@media (max-width: 1200px) {
		padding: 11px 17px;
		font-size: 11.5px;
		line-height: 17.25px;
	}

	// effects
	&--transpatent {
		background-color: transparent;
		color: $black;
	}
	&--lil-font {
		font-family: $outfitFont;
		font-size: 14px;
		font-weight: 600;
		line-height: 130%;
		padding: 14px 50px 30px 20px;
		border-radius: 12.4px;
	}
	&:disabled {
		pointer-events: none;
		cursor: not-allowed;
		opacity: 0.7;
	}
	&:hover {
		opacity: 0.8;
	}
}
</style>

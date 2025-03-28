<script setup>
	// props
	const props = defineProps({
		value: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
	});

	// emits
	const emit = defineEmits(['update:value']);

	// functions
	const updateValue = () => {
		emit('update:value', props.value ? false : true);
	}
</script>

<template>
	<label class="ui-checkbox" :class="{'error': error}">
		<input
			type="checkbox"
			:value="value"
			@input="updateValue"
		/>
		<div class="ui-checkbox__checkbox" :class="{'active': value}">
			<icons-checked v-if="value" />
		</div>
		<span class="ui-checkbox__label">
			<slot />
		</span>
	</label>
</template>

<style lang="scss">
	.ui-checkbox {
		cursor: pointer;
		display: flex;
		gap: 12px;
		align-items: center;

		input { display: none; }
		&.error {
			.ui-checkbox__checkbox { border-color: $red }
			.ui-checkbox__label { color: $red }
		}
	}

	.ui-checkbox__checkbox {
		border: 2px solid $lightGray;
		width: 24px;
		height: 24px;

		display: flex;
		align-items: center;
		justify-content: center;
		@include transition();

		&.active
		{
			background-color: $black;
			border-color: $black;
		}
	}

	.ui-checkbox__label {
		font-size: 1.125rem;

		a {
			color: inherit;
			text-decoration: underline;
		}
	}
</style>
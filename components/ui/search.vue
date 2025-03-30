<script setup>
const props = defineProps({
	modelValue: { type: String, required: true },
	placeholder: { type: String, default: "" },
	errorText: { type: String, default: "" },
	error: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "triggerIcon"]);

const focus = ref(false);
const inputRef = ref(null);

const focusInput = () => {
	if (inputRef.value) inputRef.value.focus();
};
const updateValue = (value) => emit("update:modelValue", value);
</script>

<template>
	<div
		class="ui-search"
		:class="{
			active: focus || modelValue,
			error: error,
		}"
	>
		<div class="ui-search__wr">
			<button
				type="submit"
				class="ui-search__icon"
				@click="emit('triggerIcon')"
			>
				<IconsSearch />
			</button>
			<input
				class="ui-search__input"
				ref="inputRef"
				type="search"
				:value="modelValue"
				:placeholder="placeholder"
				@focus="focus = true"
				@blur="focus = false"
				@input="updateValue($event.target.value)"
			/>
		</div>

		<span v-if="errorText" class="ui-search__error-text">
			{{ errorText }}
		</span>
	</div>
</template>

<style lang="scss">
$placeholder: #9596a6;
$inputBg: #efefef;
.ui-search {
	width: 350px;
	max-height: 57px;

	@media (max-width: 1200px) {
		width: 250px;
		max-height: 40px;
	}
	&.active {
		&__input {
			border-color: $black;
			background-color: transparent;
		}
	}

	&.error {
		&__input {
			border-color: $red;
		}
	}

	&__wr {
		position: relative;
	}

	&__input {
		// default
		width: 100%;
		max-height: 57px;
		padding: 18px 27px 18px 60px;
		border: 1.5px solid transparent;
		outline: none;
		border-radius: 11px;
		background-color: $inputBg;
		color: $black;
		font-size: 1rem;
		transition: 0.3s ease-in-out;

		@media (max-width: 1200px) {
			padding: 13px 16px 13px 45px;
			font-size: 11.17px;
			line-height: 117.5%;
			max-height: 40px;
		}

		// effects
		&:hover {
			border-color: $black;
			background-color: transparent;
		}
		&::placeholder {
			color: $placeholder;
			font-size: 13.45px;
			font-weight: 400;
			line-height: 124.5%;
		}
	}

	&__error-text {
		display: block;
		margin-top: 5px;
		color: $red;
		font-size: 0.75rem;
	}

	&__icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 20px;
		line-height: 0;
		overflow: hidden;
		cursor: pointer;

		@media (max-width: 1200px) {
			left: 16px;
		}

		svg {
			width: 20px;
			height: 20px;

			@media (max-width: 1200px) {
				width: 15px;
				height: 15px;
			}
		}
	}
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
	-webkit-appearance: none;
}
</style>

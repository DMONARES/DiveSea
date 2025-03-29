<script setup>
const props = defineProps({
	type: { type: String, default: "text" },
	value: { type: String, required: true },
	label: { type: String, default: "" },
	placeholder: { type: String, default: "" },
	errorText: { type: String, default: "" },
	error: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	isPhone: { type: Boolean, default: false },
	elementType: { type: String, default: "input" },
});
const emit = defineEmits(["update:value", "triggerIcon"]);

// vars
const focus = ref(false);
const inputRef = ref(null);

// functions
const focusInput = () => {
	if (inputRef.value) inputRef.value.focus();
};
const updateValue = (value) => emit("update:value", value);

// check hasSlot
const slots = useSlots();
const hasSlotContent =
	slots.hasOwnProperty("default") && slots.default().length > 0;
</script>

<template>
	<div
		class="ui-input"
		:class="{
			active: focus || value,
			disabled: disabled,
			error: error,
		}"
	>
		<label v-if="label" class="ui-input__label" @click="focusInput">
			{{ label }}
		</label>

		<div class="ui-input__wr">
			<!-- Input -->
			<component
				v-if="!isPhone"
				:is="elementType"
				class="ui-input__input"
				ref="inputRef"
				:type="elementType === 'input' ? type : undefined"
				:value="value"
				:placeholder="placeholder"
				:disabled="disabled"
				@focus="focus = true"
				@blur="focus = false"
				@input="updateValue($event.target.value)"
			></component>

			<!-- Phone -->
			<input
				v-else
				class="ui-input__input"
				ref="inputRef"
				v-maska
				data-maska="+7 (###) ###-##-##"
				:type="type"
				:value="value"
				:placeholder="placeholder"
				:disabled="disabled"
				@focus="focus = true"
				@blur="focus = false"
				@input="updateValue($event.target.value)"
			/>
			<div
				v-if="hasSlotContent"
				class="ui-input__icon"
				:class="{'ui-input__icon--area': elementType === 'textarea'}"
				@click="emit('triggerIcon')"
			>
				<slot />
			</div>
		</div>

		<span v-if="errorText" class="ui-input__error-text">{{
			errorText
		}}</span>
	</div>
</template>

<style lang="scss">
$placeholder: #9596a6;
$inputBg: #efefef;
.ui-input {
	&.active {
		.ui-input__input {
			border-color: $black;
			background-color: transparent;
		}
	}

	&.error {
		.ui-input__input {
			border-color: $red;
		}
	}

	&.disabled {
		cursor: not-allowed;
	}
}

.ui-input__wr {
	position: relative;
}

.ui-input__label {
	width: max-content;
	display: block;
	margin-bottom: 20px;
	font-family: $primaryFont;
	font-size: 20px;
	font-weight: 600;
	line-height: 124.5%;
	color: $black;
	transition: 0.3s ease-in-out;
	cursor: pointer;
}

.ui-input__input {
	// default
	width: 100%;
	padding: 18px 81px 18px 27px;
	border: 1.5px solid transparent;
	outline: none;
	border-radius: 11px;
	background-color: $inputBg;
	color: $black;
	font-size: 1rem;
	transition: 0.3s ease-in-out;

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
	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
}

.ui-input__error-text {
	display: block;
	margin-top: 5px;
	color: $red;
	font-size: 0.75rem;
}

.ui-input__icon {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 27px;
	line-height: 0;
	overflow: hidden;
	pointer-events: none;

	&--area {
		top: 18px;
		transform: translateY(0);
	}

	svg {
		width: 20px;
		height: 20px;
	}
}
</style>

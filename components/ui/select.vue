<script setup>
const props = defineProps({
	modelValue: { type: [String, Number], required: true },
	options: { type: Array, required: true },
	label: { type: String, default: "" },
	placeholder: { type: String, default: "Выберите" },
	errorText: { type: String, default: "" },
	error: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	type: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);
const isOpen = ref(false);
const inputValue = ref(props.modelValue);
const isFocused = ref(false);
const dropdownRef = ref(null);
const inputRef = ref(null);

const selectOption = (option) => {
	emit("update:modelValue", option);
	inputValue.value = option;
	isOpen.value = false;
};

const handleInput = (event) => {
	const value = event.target.value;

	if (props.type === "royalty") {
		const numericValue = value.replace(/%/g, "");

		if (/^\d*$/.test(numericValue)) {
			const formattedValue = numericValue
				? numericValue.endsWith("%")
					? numericValue
					: `${numericValue}%`
				: "";

			inputValue.value = formattedValue;
			emit("update:modelValue", formattedValue);
		} else {
			event.preventDefault();
			inputValue.value = props.modelValue;
		}
	} else {
		if (/^\d*$/.test(value)) {
			inputValue.value = value;
			emit("update:modelValue", value);
		} else {
			event.preventDefault();
			inputValue.value = props.modelValue;
		}
	}
};

const toggleDropdown = () => {
	if (!props.disabled) {
		isOpen.value = !isOpen.value;
		if (isOpen.value) {
			nextTick(() => {
				inputRef.value?.focus();
			});
		}
	}
};

const closeDropdown = () => {
	isOpen.value = false;
};

const handleClickOutside = (event) => {
	if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
		isOpen.value = false;
	}
};

onMounted(() => {
	document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
	document.removeEventListener("click", handleClickOutside);
});

watch(
	() => props.modelValue,
	(newValue) => {
		inputValue.value = newValue;
	}
);
</script>

<template>
	<div
		class="ui-select"
		:class="{ active: modelValue, disabled: disabled, error: error }"
		ref="dropdownRef"
	>
		<label v-if="label" class="ui-select__label">{{ label }}</label>
		<div class="ui-select__wr" @click="toggleDropdown">
			<div class="ui-select__selected">
				<input
					v-model="inputValue"
					class="ui-select__input"
					:placeholder="placeholder"
					:disabled="disabled"
					@input="handleInput"
					@focus="isFocused = true"
					@blur="
						() => {
							isFocused = false;
						}
					"
					type="text"
					ref="inputRef"
				/>
			</div>
			<IconsSelect class="ui-select__icon" />
		</div>
		<ul v-if="isOpen" class="ui-select__dropdown">
			<li
				v-for="option in options"
				:key="option"
				class="ui-select__option"
				@mousedown.prevent="selectOption(option)"
			>
				{{ option }}
			</li>
		</ul>
		<span v-if="errorText" class="ui-select__error-text">{{
			errorText
		}}</span>
	</div>
</template>

<style lang="scss">
$placeholder: #9596a6;
$inputBg: #efefef;
.ui-select {
	position: relative;

	&.error &__selected {
		border-color: red;
	}
	&.disabled {
		cursor: not-allowed;
	}

	&__label {
		width: max-content;
		display: block;
		margin-bottom: 20px;
		font-family: $primaryFont;
		font-size: 20px;
		font-weight: 600;
		line-height: 124.5%;
		color: $black;
		transition: 0.3s ease-in-out;
	}
	&__wr {
		position: relative;
		padding: 12px 15px;
		border-radius: 8px;
		background: $inputBg;
		border: 1.5px solid transparent;
		transition: 0.3s;
		&:hover {
			border-color: $black;
		}
	}
	&__selected {
		color: $black;
	}
	&__input {
		width: 100%;
		padding: 5px 0;
		background: transparent;
		border: none;
		color: $black;
		font-size: 16px;
		outline: none;
	}
	&__icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 27px;
		line-height: 0;
		overflow: hidden;
		width: 9px;
		height: 6px;
	}
	&__dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		max-height: 200px;
		overflow-y: auto;
		background: $white;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		z-index: 1000;
	}
	&__option {
		position: relative;
		padding: 10px 15px;
		transition: 0.3s;
		&:hover {
			background: #f0f0f0;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 2%;
			width: 95%;
			height: 1px;
			background-color: $inputBg;
		}
	}
	&__error-text {
		display: block;
		margin-top: 5px;
		color: red;
		font-size: 12px;
	}
}
</style>

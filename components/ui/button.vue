<script setup>
const props = defineProps({
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
	isActive: {
		type: Boolean,
		default: false,
	},
	isFilter: {
		type: Boolean,
		default: false,
	},
	options: {
		type: Array,
		default: () => [],
	},
	selectedOptions: {
		type: Array,
		default: () => [],
	},
	multiSelect: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["select", "click", "toggle"]);
const isOpen = ref(false);

const toggleDropdown = () => {
	if (!props.isFilter) {
		emit("click");
		return;
	}
	isOpen.value = !isOpen.value;
};

const toggleOption = (option) => {
	emit("toggle", option);
	if (!props.multiSelect) {
		isOpen.value = false;
	}
};

onMounted(() => {
	if (props.isFilter) {
		document.addEventListener("click", handleOutsideClick);
	}
});

onUnmounted(() => {
	if (props.isFilter) {
		document.removeEventListener("click", handleOutsideClick);
	}
});

const buttonRef = ref(null);

const handleOutsideClick = (event) => {
	if (buttonRef.value && !buttonRef.value.contains(event.target)) {
		isOpen.value = false;
	}
};
</script>

<template>
	<div class="ui-button-wrapper" ref="buttonRef">
		<button
			class="ui-button"
			:disabled="disabled"
			:class="{
				'ui-button--transpatent': transpatent,
				'ui-button--lil-font': lilFont,
				'ui-button--active': isActive || selectedOptions.length > 0,
				'ui-button--filter': isFilter,
				'ui-button--open': isOpen,
			}"
			@click="toggleDropdown"
		>
			<slot />
			<span
				v-if="selectedOptions && selectedOptions.length > 0"
				class="ui-button__badge"
				>{{ selectedOptions.length }}</span
			>
		</button>

		<div v-if="isFilter && isOpen" class="ui-button__dropdown">
			<ul class="ui-button__dropdown-list">
				<li
					v-for="option in options"
					:key="option"
					class="ui-button__dropdown-item"
					:class="{
						'ui-button__dropdown-item--active':
							selectedOptions && selectedOptions.includes(option),
					}"
					@click.stop="toggleOption(option)"
				>
					<span
						class="ui-button__dropdown-checkbox"
						v-if="multiSelect"
					>
						<input
							type="checkbox"
							:checked="
								selectedOptions &&
								selectedOptions.includes(option)
							"
							@click.stop
						/>
					</span>
					{{ option }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
.ui-button-wrapper {
	position: relative;
	display: inline-block;
}

.ui-button {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 18px 30px;
	background-color: $black;
	border: 1.5px solid $black;
	border-radius: 23px;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	font-family: $primaryFont;
	font-size: 16.27px;
	font-weight: 500;
	line-height: 24px;
	text-transform: capitalize;
	color: $white;
	position: relative;

	@media (max-width: 1200px) {
		padding: 11px 17px;
		font-size: 11.5px;
		line-height: 17.25px;
	}

	&--transpatent {
		background-color: transparent;
		color: $black;
	}

	&--active {
		background-color: $lightGreen;
		border-color: $lightGreen;
		color: $black;
	}

	&--filter {
		position: relative;
	}

	&--open {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	&:disabled {
		pointer-events: none;
		cursor: not-allowed;
		opacity: 0.7;
	}

	&:hover {
		opacity: 0.8;
	}

	&__badge {
		position: absolute;
		top: -8px;
		right: -8px;
		background-color: $black;
		color: $white;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: bold;
	}
}

.ui-button__dropdown {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: $white;
	border: 1.5px solid $black;
	border-top: none;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	z-index: 10;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-height: 200px;
	overflow-y: auto;

	&-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&-item {
		padding: 12px 20px;
		font-size: 14px;
		cursor: pointer;
		transition: background-color 0.2s;
		display: flex;
		align-items: center;
		gap: 10px;

		&:hover {
			background-color: $lightGreen;
		}

		&:last-child {
			border-bottom-left-radius: 12px;
			border-bottom-right-radius: 12px;
		}

		&--active {
			background-color: $lightGreen;
			font-weight: 500;
		}
	}

	&-checkbox {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>

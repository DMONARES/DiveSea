<script setup>
const props = defineProps({
	title: { type: String, required: true },
});

const active = ref(false);
const contentHeight = ref("0px");
const contentRef = ref(null);

const toggleActive = async () => {
	active.value = !active.value;

	if (active.value) {
		await nextTick();
		contentHeight.value = `${contentRef.value.scrollHeight}px`;
	} else contentHeight.value = "0px";
};
</script>

<template>
	<div class="ui-accordion" :class="{ active: active }">
		<div class="ui-accordion__head" @click.stop="toggleActive">
			<span class="ui-accordion__head-title">
				{{ title }}
			</span>
			<div class="ui-accordion__head-button">
				<div
					class="ui-accordion__head-icon"
					:class="{ active: active }"
				>
					<span />
					<span />
				</div>
			</div>
		</div>
		<div
			class="ui-accordion__content"
			:style="{ maxHeight: contentHeight }"
			ref="contentRef"
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.ui-accordion {
	width: 100%;
	border-bottom: 2px solid $grey;
	transition: 0.3s ease-in-out;

	&.active {
		padding-bottom: 16px;

		.ui-accordion__head-icon {
			span {
				&:last-child {
					transform: rotate(0deg) translate(-1px, -1px);
				}
			}
		}
	}
}

.ui-accordion__head {
	cursor: pointer;
	padding: 16px 8px;
	transition: 500ms;

	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 10px;
}

.ui-accordion__head-title {
	max-width: 90%;
	font-size: 25.37px;
	font-weight: 600;
	line-height: 64.18px;

	@media (max-width: 1200px) {
		font-size: 18.04px;
		line-height: 45.64px;
	}
	@media (max-width: 850px) {
		max-width: 70%;
		font-size: 12.3px;
		line-height: 31.12px;
	}
}

.ui-accordion__head-button {
	width: 26px;
	height: 26px;
	background-color: $black;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.ui-accordion__head-icon {
	flex-shrink: 0;

	span {
		display: block;
		background-color: $white;
		width: 16px;
		height: 1px;
		border-radius: 2px;

		transition: 0.3s ease-in-out;
		&:last-child {
			transform: rotate(90deg) translate(-1px, 0px);
		}
	}

	&.active {
		span {
			&:last-child {
				transform: rotate(0deg) translate(-1px, -1px);
			}
		}
	}
}

.ui-accordion__content {
	overflow: hidden;
	padding: 0 8px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	transition: max-height 500ms;
}
</style>

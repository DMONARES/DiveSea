<script setup>
	const props = defineProps({
		title: { type: String, required: true },
	});

	const active = ref(false);
	const contentHeight = ref('0px');
	const contentRef = ref(null);

	const toggleActive = async () => {
		active.value = !active.value;

		if (active.value) {
			await nextTick();
			contentHeight.value = `${contentRef.value.scrollHeight}px`;
		}
		else
			contentHeight.value = '0px';
	};
</script>

<template>
	<div class="ui-accordion" :class="{'active': active}">
		<div class="ui-accordion__head" @click.stop="toggleActive">
			<span class="ui-accordion__head-title">
				{{ title }}
			</span>
			<div class="ui-accordion__head-icon" :class="{'active': active}">
				<span />
				<span />
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

<style lang='scss'>
	.ui-accordion
	{
		border-bottom: 2px solid $black;
		@include transition();

		&.active
		{
			padding-bottom: 16px;

			.ui-accordion__head-icon
			{
				span
				{
					&:last-child { transform: rotate(0deg) translate(-1px, -1px); }
				}
			}
		}
	}

	.ui-accordion__head
	{
		cursor: pointer;
		padding: 16px 8px;
		transition: 500ms;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
	}

	.ui-accordion__head-title
	{
		font-size: 1rem;
		font-weight: 500;
	}

	.ui-accordion__head-icon
	{
		flex-shrink: 0;

		span {
			display: block;
			background-color: $black;
			width: 16px;
			height: 1px;
			border-radius: 2px;

			@include transition();
			&:last-child { transform: rotate(90deg) translate(-1px, 0px); }
		}

		&.active
		{
			span
			{
				&:last-child { transform: rotate(0deg) translate(-1px, -1px); }
			}
		}
	}

	.ui-accordion__content
	{
		overflow: hidden;
		padding: 0 8px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		transition: max-height 500ms;
	}
</style>
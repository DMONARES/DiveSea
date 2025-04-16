<script setup>
const props = defineProps({
	tabs: {
		type: Array,
		required: true,
		default: () => [],
	},
});

const activeTab = ref(props.tabs[0]?.name || "");
</script>

<template>
	<div class="ui-tabs">
		<div class="ui-tabs__header">
			<button
				v-for="tab in tabs"
				:key="tab.name"
				@click="activeTab = tab.name"
				class="ui-tabs__header-title"
				:class="[
					activeTab === tab.name
						? 'ui-tabs__header-title--active'
						: 'ui-tabs__header-title',
				]"
			>
				<component :is="tab.icon" :is-active="activeTab === tab.name" />
				{{ tab.label }}
			</button>
			<span
				class="ui-tabs__underline"
				:style="{
					left: `calc(${100 / tabs.length}% * ${tabs.findIndex(
						(t) => t.name === activeTab
					)})`,
					width: `calc(${100 / tabs.length}%)`,
				}"
			></span>
		</div>

		<div class="ui-tabs__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ui-tabs {
	&__header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-title {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			padding: 15px 0;
			gap: 5px;
			font-size: 16.25px;
			font-weight: 700;
			line-height: 24.91px;
			color: $lightGrey;

			&--active {
				color: $black;
			}
		}
	}
	&__underline {
		position: absolute;
		bottom: 0;
		height: 3px;
		border-radius: 5px;
		background-color: $black;
		transition: left 0.3s ease;
	}
	&__content {
		margin-top: 85px;
		width: 100%;
	}
}
</style>

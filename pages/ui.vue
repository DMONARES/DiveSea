<script setup>

</script>

<template>
	<div style="margin: 50px;">
		<h1 style="font-size: 40px; margin-bottom: 50px;">UI</h1>

		<h2 style="font-size: 24px; margin-bottom: 20px;">Buttons</h2>
		<UiButton class="btn" style="margin-bottom: 10px;">Default Button</UiButton>
		<UiButton class="btn" style="margin-bottom: 10px;" :disabled="true">Disabled Button</UiButton>
		<UiButton class="btn" style="margin-bottom: 10px;" :transpatent="true">transpatent Button</UiButton>
		<UiButton style="margin-bottom: 10px;" :lilFont="true">lilFont Button</UiButton>
		<UiButton style="margin-bottom: 10px;" :lilFont="true" :transpatent="true">lilFont transpatent Button</UiButton>

		<h2 style="font-size: 24px; margin: 20px 0;">Inputs</h2>
		<uiInput placeholder="Search Art Work / Creator" />
		<uiInput placeholder="Search Art Work / Creator" :error="true" style="margin: 20px 0;"/>
		<uiInput placeholder="Search Art Work / Creator" type="search" style="margin: 20px 0;"/>
	</div>
</template>

<style lang="scss" scoped>
.btn {
	text-transform: uppercase;
}
</style>
<script setup>
import { ref } from 'vue';

const artworkName = ref('');
const areaText= ref('');
const ex = ref('');
const beautifulCastle = ref('');
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
		<uiInput v-model="artworkName" placeholder="ArtWork Name" label="Name" style="margin-bottom: 10px;">
			<IconsEdit/>
		</uiInput>
		<uiInput v-model="areaText" elementType="textarea" placeholder="ArtWork Name" label="Name" style="margin-bottom: 10px;">
			<IconsEdit/>
		</uiInput>
		<uiInput v-model="ex" placeholder="Ex - 100 x 100" label="Size" style="margin-bottom: 10px;" />
		<uiInput v-model="beautifulCastle" placeholder="Beautiful Castle, Monkeys ETC" label="Tags" style="margin-bottom: 10px;">
			<IconsEdit/>
		</uiInput>
	</div>
</template>

<style lang="scss" scoped>
.btn {
	text-transform: uppercase;
}
</style>
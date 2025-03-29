<script setup>
const artworkName = ref('');
const areaText = ref('');
const ex = ref('');
const beautifulCastle = ref('');

const royaltyOptions = ref(["5%", "10%", "15%"]);
const inStockOptions = ref(["001", "002", "003"]);
const selectedRoyalty = ref("");
const selectedInStock = ref("");
</script>

<template>
	<div style="margin: 50px">
		<h1 style="font-size: 40px; margin-bottom: 50px;">UI</h1>

		<h2 style="font-size: 24px; margin-bottom: 20px;">Buttons</h2>
		<UiButton class="btn" style="margin-bottom: 10px;">Default Button</UiButton>
		<UiButton class="btn" style="margin-bottom: 10px;" :disabled="true">Disabled Button</UiButton>
		<UiButton class="btn" style="margin-bottom: 10px;" :transpatent="true">Transparent Button</UiButton>
		<UiButton style="margin-bottom: 10px;" :lilFont="true">Small Font Button</UiButton>
		<UiButton style="margin-bottom: 10px;" :lilFont="true" :transpatent="true">Small Transparent Button</UiButton>

		<h2 style="font-size: 24px; margin: 20px 0;">Inputs</h2>
		<uiInput v-model="artworkName" placeholder="ArtWork Name" label="Name" style="margin-bottom: 10px;">
			<IconsEdit/>
		</uiInput>
		<uiInput v-model="areaText" elementType="textarea" placeholder="Enter Your Description" label="Description" style="margin-bottom: 10px;">
			<IconsEdit/>
		</uiInput>
		<uiInput v-model="ex" placeholder="Ex - 100 x 100" label="Size" style="margin-bottom: 10px;" />
		<uiInput v-model="beautifulCastle" placeholder="Beautiful Castle, Monkeys ETC" label="Tags" style="margin-bottom: 10px;">
			<IconsEdit/>
		</uiInput>

		<h2 style="font-size: 24px; margin: 20px 0">Selects</h2>
		<UiSelect
			v-model="selectedInStock"
			:options="inStockOptions"
			placeholder="001"
			label="In Stock"
			style="margin-bottom: 10px"
		/>
		<UiSelect
			v-model="selectedRoyalty"
			:options="royaltyOptions"
			placeholder="Royalty"
			label="Royalty"
			style="margin-bottom: 10px"
			type="royalty"
		/>
	</div>
</template>

<style lang="scss" scoped>
.btn {
	text-transform: uppercase;
}
</style>

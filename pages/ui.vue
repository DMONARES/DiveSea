<script setup>
import { ref } from "vue";

const royaltyOptions = ref(["5%", "10%", "15%"]);
const inStockOptions = ref(["001", "002", "003"]);
const selectedRoyalty = ref("");
const selectedInStock = ref("");
</script>

<template>
	<div style="margin: 50px">
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

<script setup>
import { useProductsStore } from "~/stores/products";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;

const productsStore = useProductsStore();

// Находим продукт по ID
const product = productsStore.products.find(
	(item) => String(item.id) === String(productId)
);

// Устанавливаем Title для страницы
useHead(() => ({
	title: product ? `DeveSea — NFT — ${product.nftName}` : "NFT — Not Found",
}));
</script>

<template>
  <main>
    <UiBack />
    <NftCardDetail :product="product" />
    <Recommend title="From Creator" :recent="false" />
  </main>
</template>

<style lang="scss" scoped>
main {
  overflow: hidden;
}
</style>
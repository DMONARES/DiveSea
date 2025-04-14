<script setup>
import { useRecommendStore } from '~/stores/recommend'

const route = useRoute()
const productId = route.params.id

const recommendStore = useRecommendStore()

const product = recommendStore.slides.find(item => String(item.id) === String(productId))
</script>

<template>
  <main>
	<UiBack />
    <NftCardDetail :product="product" />
  </main>
</template>

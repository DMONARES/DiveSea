<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";

const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", () => (loading.value = true));
nuxtApp.hook("page:finish", () => (loading.value = false));

// Логика отображения кнопки "Вверх"
// Кнопка становится видимой (opacity: 1) при прокрутке более 200px
const showScroll = ref(false);

const checkScroll = () => {
	showScroll.value = window.scrollY > 200;
};

onMounted(() => {
	window.addEventListener("scroll", checkScroll);
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", checkScroll);
});

// Функция для плавной прокрутки наверх
const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
	<div class="default-layout">
		<Header />
		<main class="main">
			<slot />
		</main>
		<Footer />
	</div>

	<Teleport to="body">
		<HugePreloader v-if="loading" />
	</Teleport>

	<button
		class="scroll-top"
		:class="{ visible: showScroll }"
		@click="scrollToTop"
	>
		<IconsArrowRight />
	</button>
</template>

<style lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.main {
	flex: 1 0 auto;
}

.scroll-top {
	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: $black;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	transition: opacity 0.3s;
	opacity: 0;
	pointer-events: none;

	svg {
		rotate: -90deg;
		z-index: 100;
	}
}

.scroll-top.visible {
	opacity: 1;
	pointer-events: auto;
}
</style>

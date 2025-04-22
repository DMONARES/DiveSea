<template>
	<div v-if="isOpen" class="popup">
		<div class="popup__overlay" @click="closePopup"></div>
		<div class="popup__content">
			<slot />
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	isOpen: { type: Boolean, required: true },
});

const emit = defineEmits(["close"]);

const closePopup = () => emit("close");

const preventScroll = () => {
	if (props.isOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
};

watch(
	() => props.isOpen,
	(newValue) => {
		preventScroll();
	}
);

onMounted(() => {
	preventScroll();
});

onBeforeUnmount(() => {
	document.body.style.overflow = "";
});
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;

	&__overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.2);

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
			mix-blend-mode: overlay;
		}
	}

	&__content {
		max-width: 90%;
		max-height: 90vh;
		padding: 30px;
		position: relative;
		background: $white;
		border: 2px solid $black;
		border-radius: 34px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
		z-index: 1001;
		overflow-y: auto;
	}
}
</style>

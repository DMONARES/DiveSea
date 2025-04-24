<script setup>
defineProps({
    direction: {
        type: String,
        default: null,
    },
});
</script>

<template>
	<svg
		width="19.900391"
		height="19.900391"
		viewBox="0 0 19.9004 19.9004"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<clipPath id="clip1_3507">
				<rect
					id="arrows-down-up"
					rx="0.000000"
					width="18.656670"
					height="18.656670"
					transform="translate(0.621889 0.621889)"
					fill="white"
					fill-opacity="0"
				/>
			</clipPath>
		</defs>
		<rect
			id="arrows-down-up"
			rx="0.000000"
			width="18.656670"
			height="18.656670"
			transform="translate(0.621889 0.621889)"
			fill="#FFFFFF"
			fill-opacity="0"
		/>
		<g clip-path="url(#clip1_3507)">
			<!-- вверх -->
			<path
				v-if="direction === 'asc' || direction === null"
				id="Vector"
				d="M14.09 2.48L14.09 17.41"
				stroke="#1A202C"
				stroke-opacity="1.000000"
				stroke-width="1.865667"
				stroke-linejoin="round"
				stroke-linecap="round"
			/>
			<!-- вниз -->
			<path
				v-if="direction === 'desc' || direction === null"
				id="Vector"
				d="M8.29 14.92L5.8 17.41L3.31 14.92"
				stroke="#1A202C"
				stroke-opacity="1.000000"
				stroke-width="1.865667"
				stroke-linejoin="round"
				stroke-linecap="round"
			/>
			<!-- вниз -->
			<path
				v-if="direction === 'desc' || direction === null"
				id="Vector"
				d="M5.8 17.41L5.8 2.48"
				stroke="#1A202C"
				stroke-opacity="1.000000"
				stroke-width="1.865667"
				stroke-linejoin="round"
				stroke-linecap="round"
			/>
			<!-- вверх -->
			<path
				v-if="direction === 'asc' || direction === null"
				id="Vector"
				d="M16.58 4.97L14.09 2.48L11.6 4.97"
				stroke="#1A202C"
				stroke-opacity="1.000000"
				stroke-width="1.865667"
				stroke-linejoin="round"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>

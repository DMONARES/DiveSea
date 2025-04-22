<template>
	<div
		class="crypto-input"
		:class="{
			'crypto-input--active': cryptoValue,
			'crypto-input--error': false,
			'crypto-input--focused': isFocused,
		}"
	>
		<div
			class="crypto-input__wrapper"
			@focusin="isFocused = true"
			@focusout="isFocused = false"
			@mouseenter="isHovered = true"
			@mouseleave="isHovered = false"
		>
			<div class="crypto-input__select-wrapper">
				<select
					v-model="selectedCurrency"
					class="crypto-input__select"
					@change="updateUsdValue"
				>
					<option
						v-for="currency in currencies"
						:key="currency"
						:value="currency"
					>
						{{ currency }}
					</option>
				</select>
			</div>
			<div class="crypto-input__field-wrapper">
				<input
					type="number"
					v-model="cryptoValue"
					class="crypto-input__field"
					@input="updateUsdValue"
					placeholder="0.00"
				/>
			</div>
		</div>
		<p class="crypto-input__usd-value">~{{ animatedUsdValue }} USD</p>
	</div>
</template>

<script setup>
const currencyStore = useCurrencyStore();
const currencies = ["ETH", "BTC", "SOL"];
const selectedCurrency = ref("ETH");
const cryptoValue = ref("");
const usdValue = ref(0);
const animatedUsdValue = ref(0);
let animationFrame = 1;
const isFocused = ref(false);
const isHovered = ref(false);

onMounted(() => {
	currencyStore.fetchRates();
});

const animateUsdValue = (start, end) => {
	const duration = 1000;
	const startTime = performance.now();

	const step = (currentTime) => {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		animatedUsdValue.value = (start + (end - start) * progress).toFixed(2);

		if (progress < 1) {
			animationFrame = requestAnimationFrame(step);
		}
	};

	cancelAnimationFrame(animationFrame);
	requestAnimationFrame(step);
};

const updateUsdValue = () => {
	if (!cryptoValue.value || isNaN(cryptoValue.value)) {
		animateUsdValue(Number(animatedUsdValue.value), 0);
		usdValue.value = 0;
		return;
	}

	const rate = currencyStore.getRate(selectedCurrency.value);
	const newUsd = cryptoValue.value * rate;
	usdValue.value = newUsd.toFixed(2);
	animateUsdValue(Number(animatedUsdValue.value), newUsd);
};

watch(() => selectedCurrency.value, updateUsdValue);
watch(() => cryptoValue.value, updateUsdValue);
</script>

<style lang="scss" scoped>
.crypto-input {
	width: 100%;
	max-width: 400px;
	font-family: "Inter", sans-serif;

	&__wrapper {
		display: flex;
		width: 100%;
		border: 1px solid transparent;
		background-color: #efefef;
		border-radius: 8px;
		overflow: hidden;
		transition: border-color 0.2s ease;
	}

	&__select-wrapper,
	&__field-wrapper {
		display: flex;
		align-items: center;
		background-color: #efefef;
	}

	&__select {
		flex: 0 0 90px;
		padding: 12px 16px;
		border: none;
		background: #efefef;
		color: #111827;
		font-size: 16px;
		font-weight: 500;
		appearance: none;

		&:focus {
			outline: none;
		}
	}

	&__field {
		flex: 1;
		padding: 12px 16px;
		border: none;
		background: #efefef;
		color: $black;
		font-size: 16px;
		font-weight: 500;
		border-left: 1px solid $lightGrey;

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: $lightGrey;
		}
	}

	&__usd-value {
		margin-top: 8px;
		font-size: 14px;
		color: $lightGrey;
	}

	&--focused,
	&:hover {
		.crypto-input__wrapper {
			border-color: $black;
		}
	}

	&--error {
		.crypto-input__wrapper {
			border-color: $red;
		}

		.crypto-input__usd-value {
			color: $red;
		}
	}
}
</style>

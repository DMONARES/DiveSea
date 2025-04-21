<script setup>
import { useProductsStore } from "~/stores/products";
import { useCurrencyStore } from "~/stores/currency";

const productsStore = useProductsStore();
const currencyStore = useCurrencyStore();

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});

// Состояние для отслеживания открытого/закрытого состояния карточки
const isExpanded = ref(false);

// Функция для переключения состояния
const toggleExpand = () => {
	isExpanded.value = !isExpanded.value;
};

currencyStore.fetchEthToUsd();

const timeRemaining = ref("");

const calculateTimeRemaining = () => {
	const now = Date.now();
	const end = new Date(props.item.timer).getTime();
	let diff = end - now;

	if (diff <= 0) {
		timeRemaining.value = "00h:00m:00s";
		return;
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	diff %= 1000 * 60 * 60 * 24;
	const hours = Math.floor(diff / (1000 * 60 * 60));
	diff %= 1000 * 60 * 60;
	const minutes = Math.floor(diff / (1000 * 60));
	diff %= 1000 * 60;
	const seconds = Math.floor(diff / 1000);

	const pad = (n) => n.toString().padStart(2, "0");

	timeRemaining.value =
		days > 0
			? `${days}d:${pad(hours)}h:${pad(minutes)}m`
			: `${pad(hours)}h:${pad(minutes)}m:${pad(seconds)}s`;
};

calculateTimeRemaining();

const usdPrice = computed(() => {
	if (!currencyStore.ethToUsd) return "—";

	const value = props.item.price * currencyStore.ethToUsd;

	return new Intl.NumberFormat("en", {
		notation: "compact",
		compactDisplay: "short",
		maximumFractionDigits: 2,
	}).format(value);
});

let countdownInterval = null;
let currencyInterval = null;

onMounted(() => {
	// Обновление курса с интервалом 5 минут
	currencyInterval = setInterval(() => {
		currencyStore.fetchEthToUsd();
	}, 5 * 60 * 1000);

	// Обновление таймера каждую секунду
	countdownInterval = setInterval(() => {
		calculateTimeRemaining();
	}, 1000);
});

onUnmounted(() => {
	if (countdownInterval) clearInterval(countdownInterval);
	if (currencyInterval) clearInterval(currencyInterval);
});
</script>

<template>
	<div class="nft-active">
		<div class="nft-active__head">
			<div class="nft-active__head-about">
				<div class="nft-active__head-image">
					<img :src="item.nftImage" :alt="'NFT —' + item.nftName" />
				</div>
				<div class="nft-active__head-user">
					<div class="nft-active__head-item">{{ item.nftName }}</div>
					<div class="nft-active__head-nickname">
						{{ item.nickname }}
						<IconsVerified />
					</div>
				</div>
			</div>
			<div class="nft-active__head-info">
				<div class="nft-active__head-status">{{ item.status }}</div>
				<div class="nft-active__head-price">
					<IconsEthereum />
					{{ item.price }}
				</div>
				<div class="nft-active__head-timer">{{ timeRemaining }}</div>
				<IconsArrowDown
					class="nft-active__head-more"
					:class="{ rotate: isExpanded }"
					@click="toggleExpand"
				/>
			</div>
		</div>

		<!-- Используем v-show вместо v-if для анимации -->
		<div class="nft-active__expandable" :class="{ expanded: isExpanded }">
			<div class="nft-active__line"></div>
			<div class="nft-active__content">
				<ul class="nft-active__content-list">
					<li class="nft-active__content-item">
						<p>USD Price</p>
						<div class="nft-active__content-stat">
							${{ usdPrice }}
						</div>
					</li>
					<li class="nft-active__content-item">
						<p>Quantity</p>
						<div class="nft-active__content-stat">
							{{ item.quantity }}
						</div>
					</li>
					<li class="nft-active__content-item">
						<p>Owners</p>
						<div class="nft-active__content-stat">
							<IconsEthereum />
							{{ item.owners }}
						</div>
					</li>
					<li class="nft-active__content-item">
						<p>Items</p>
						<div class="nft-active__content-stat">
							{{ item.items }}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.nft-active {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 15px;
	border-radius: 14px;
	box-shadow: 18.78px 12.52px 64.15px 0px rgba(97, 97, 97, 0.25);

	&__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		width: 100%;
		&-about {
			display: flex;
			align-items: flex-start;
			gap: 20px;
		}
		&-image {
			img {
				width: 65px;
				height: 65px;
				border-radius: 12px;
			}
		}
		&-user {
			display: flex;
			flex-direction: column;
			align-items: start;
		}
		&-item {
			font-size: 16.99px;
			font-weight: 600;
			line-height: 26.7px;
		}
		&-nickname {
			font-size: 12.08px;
			font-weight: 400;
			line-height: 18px;

			svg {
				width: 12px;
				height: 12px;
			}
		}
		&-info {
			position: relative;
			margin-right: 40px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
		&-status {
			color: rgb(20, 167, 96);
			font-size: 12.08px;
			font-weight: 400;
			line-height: 18px;
			text-transform: capitalize;
		}
		&-price {
			display: flex;
			align-items: center;
			gap: 7px;
			font-size: 16.04px;
			font-weight: 500;
			line-height: 24px;
		}
		&-timer {
			font-size: 12.08px;
			font-weight: 400;
			line-height: 18px;
			color: $grey;
		}
		&-more {
			position: absolute;
			top: 0;
			right: -40px;
			cursor: pointer;
			transition: transform 0.3s ease;

			&.rotate {
				transform: rotate(180deg);
			}
		}
	}

	&__expandable {
		overflow: hidden;
		max-height: 0;
		opacity: 0;
		transition: max-height 0.4s ease, opacity 0.3s ease;

		&.expanded {
			max-height: 200px; // Достаточно большое значение для содержимого
			opacity: 1;
		}
	}

	&__line {
		margin: 18px 0;
		width: 100%;
		height: 1px;
		background-color: $lightGrey;
	}
	&__content {
		&-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3px;

			p {
				font-size: 11.37px;
				font-weight: 400;
				line-height: 13.99px;
				color: $lightGrey;
			}
		}
		&-stat {
			display: flex;
			align-items: center;
			font-size: 15.74px;
			font-weight: 500;
			line-height: 22.74px;
		}
	}
}
</style>

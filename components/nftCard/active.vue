<script setup></script>

<template>
	<div class="nft-active">
		<div class="nft-active__head">
			<div class="nft-active__head-about">
				<div class="nft-active__head-image">
					<img :src="item.nftImage" :alt="NFT — item.nftName" />
				</div>
				<div class="nft-active__head">
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
					{{ item.price }}
					<IconsEthereum />
				</div>
				<div class="nft-active__head-timer">{{ item.timer }}</div>
				<IconsArrowMore class="nft-active__head-more" />
			</div>
		</div>
		<div class="nft-active__content"></div>
	</div>
</template>

<style lang="scss" scoped></style>

<script setup>
const questions = [
	{
		title: "What is an NFT?",
		content:
			"An NFT (Non-Fungible Token) is a unique digital asset stored on blockchain technology that certifies ownership and authenticity of specific items like digital art, collectibles, music, or virtual real estate. Unlike regular cryptocurrencies, each NFT has distinct properties and cannot be replicated.",
	},
	{
		title: "What can I use NFTs for?",
		content:
			"NFTs can be used for digital ownership verification, collecting rare artwork, gaming assets, virtual event access, and tokenizing real-world assets. They also enable creators to monetize content through royalties and offer proof of authenticity for exclusive items.",
	},
	{
		title: "What is the difference between an NFT and cryptocurrency?",
		content:
			"While both use blockchain technology, cryptocurrencies like Bitcoin are fungible (interchangeable with equal value), whereas NFTs are unique and non-interchangeable. Cryptocurrencies act as currency, while NFTs represent ownership of specific digital or physical assets.",
	},
	{
		title: "How much is an NFT worth?",
		content:
			"An NFT's value depends on factors like rarity, creator reputation, demand, utility, and community sentiment. Prices range from a few dollars to millions, determined through auctions, fixed-price sales, or collector negotiations.",
	},
	{
		title: "How do I purchase an NFT on your platform?",
		content:
			"1. Connect your crypto wallet (e.g., MetaMask)<br>2. Fund your wallet with cryptocurrency (ETH, SOL, etc.)<br>3. Browse our marketplace and select an NFT<br>4. Click 'Buy Now' or bid in auctions<br>5. Confirm the transaction in your wallet<br>Once processed, the NFT will be transferred to your wallet.",
	},
];
</script>

<template>
	<div class="questions">
		<div class="questions__container">
			<h2 class="questions__title">
				Frequently Asked <span>Questions</span>
			</h2>
			<div class="questions__content">
				<UiAccordion
					v-for="(question, index) in questions"
					:key="'question - ' + index"
					:title="question.title"
				>
					<p v-html="question.content"></p>
				</UiAccordion>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.questions {
	margin-top: 240px;
	margin-bottom: 215px;

	@media (max-width: 1200px) {
		margin-top: 170px;
		margin-bottom: 150px;
	}
	@media (max-width: 850px) {
		margin-top: 140px;
		margin-bottom: 110px;
	}
	&__container {
		padding: 0 96px;

		@media (max-width: 1200px) {
			padding: 0 70px;
		}
		@media (max-width: 850px) {
			padding: 0 30px;
		}
	}
	&__title {
		margin: 0 auto 78px;
		max-width: 450px;
		font-size: 48.75px;
		font-weight: 600;
		line-height: 140%;
		text-align: center;

		@media (max-width: 1200px) {
			max-width: 315px;
			margin: 0 auto 70px;
			font-size: 34.67px;
			line-height: 120%;
		}
		@media (max-width: 850px) {
			max-width: 215px;
			margin: 0 auto 60px;
			font-size: 23.64px;
		}

		span {
			color: $lightGrey;
		}
	}
	&__content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;

		@media (max-width: 1200px) {
			gap: 20px;
		}
		@media (max-width: 850px) {
			gap: 10px;
		}

		p {
			font-size: 20px;
			font-weight: 400;
			line-height: 140%;
			letter-spacing: 0.01em;
			color: $grey;

			@media (max-width: 1200px) {
				font-size: 14px;
			}
			@media (max-width: 850px) {
				font-size: 10px;
			}
		}
	}
}
</style>

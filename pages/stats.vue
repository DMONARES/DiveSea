<script setup></script>

<template>
	<main>
		<Collection
			title="Leaderboard NFTs"
			:moreButton="false"
			:filters="true"
			:showAll="true"
			:sortableHeaders ="true"
			class="section section__collection"
		/>
	</main>
</template>

<style lang="scss" scoped>
.section {
	&__collection {
		margin-top: -100px;
	}
}
</style>

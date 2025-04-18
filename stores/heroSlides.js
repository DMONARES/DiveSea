export const useHeroStore = defineStore("hero", {
	state: () => ({
		slides: [
			"/img/nfts/1.webp",
			"/img/nfts/2.webp",
			"/img/nfts/3.webp",
			"/img/nfts/4.webp",
			"/img/nfts/5.webp",
			"/img/nfts/3.webp",
			"/img/nfts/1.webp",
			"/img/nfts/2.webp",
			"/img/nfts/3.webp",
			"/img/nfts/4.webp",
			"/img/nfts/5.webp",
			"/img/nfts/3.webp",
		],
		infoList: [
			{
				title: "430K+",
				description: "Art Works",
			},
			{
				title: "159K+",
				description: "Creators",
			},
			{
				title: "87K+",
				description: "Collections",
			},
		],
	}),
});

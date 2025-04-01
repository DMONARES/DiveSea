export const useHeroStore = defineStore("hero", {
	state: () => ({
		slides: [
			"/img/nfts/1.png",
			"/img/nfts/2.png",
			"/img/nfts/3.png",
			"/img/nfts/4.png",
			"/img/nfts/5.png",
			"/img/nfts/6.png",
			"/img/nfts/1.png",
			"/img/nfts/2.png",
			"/img/nfts/3.png",
			"/img/nfts/4.png",
			"/img/nfts/5.png",
			"/img/nfts/6.png",
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

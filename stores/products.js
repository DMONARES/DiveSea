export const useProductsStore = defineStore("products", {
	state: () => ({
		products: [
			{
				id: "3",
				timer: "07h 09m 12s",
				nftImage: "/img/nfts/1.webp",
				miniImage: "/img/mini/1.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/10.webp",
				creatorName: "Perperzon",
				ownerAva: "/img/owners/1.webp",
				ownerName: "Videz",
				nickname: "asdasd",
				nftName: "Sun-Glass",
				nftDescription:
					"A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.",
				price: 1.75,
				category: "Art",
				collection: "BAYC",
				volume: "8,456",
				sale: "+23.00%",
				owners: "2.2K",
				items: "500",
			},
			{
				id: "4",
				timer: "04h 22m 52s",
				nftImage: "/img/nfts/2.webp",
				miniImage: "/img/mini/2.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/9.webp",
				creatorName: "Perperzon",
				ownerAva: "/img/owners/2.webp",
				ownerName: "Videz",
				nickname: "perperzon",
				nftName: "Crypto Skull",
				nftDescription:
					"A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.",
				price: 2.5,
				category: "Gaming",
				collection: "CryptoPunks",
				volume: "5,327",
				sale: "-32.01%",
				owners: "3.4K",
				items: "900",
			},
			{
				id: "5",
				timer: "10h 15m 30s",
				nftImage: "/img/nfts/3.webp",
				miniImage: "/img/mini/3.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/8.webp",
				creatorName: "Mikeno",
				ownerAva: "/img/owners/3.webp",
				ownerName: "DigitalEyes",
				nickname: "mikeno.eth",
				nftName: "Neon Spirit",
				nftDescription:
					"Bright and bold, this collection is a celebration of digital chaos and harmony.",
				price: 3.2,
				category: "Art",
				collection: "Azuki",
				volume: "6,980",
				sale: "+12.45%",
				owners: "1.9K",
				items: "420",
			},
			{
				id: "6",
				timer: "02h 44m 10s",
				nftImage: "/img/nfts/4.webp",
				miniImage: "/img/mini/4.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/7.webp",
				creatorName: "Cryopixel",
				ownerAva: "/img/owners/4.webp",
				ownerName: "MintX",
				nickname: "cryox",
				nftName: "Pixel Hunter",
				nftDescription:
					"Retro-style avatars on the blockchain. Only the sharpest survive.",
				price: 1.1,
				category: "Gaming",
				collection: "CryptoPunks",
				volume: "3,102",
				sale: "-15.80%",
				owners: "1.2K",
				items: "300",
			},
			{
				id: "7",
				timer: "11h 09m 44s",
				nftImage: "/img/nfts/5.webp",
				miniImage: "/img/mini/5.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/2.webp",
				creatorName: "BeatleArt",
				ownerAva: "/img/owners/5.webp",
				ownerName: "Harmony",
				nickname: "beatle_art",
				nftName: "Color Storm",
				nftDescription:
					"An emotional outburst of modern art blended with algorithmic beauty.",
				price: 2.9,
				category: "Art",
				collection: "BAYC",
				volume: "4,562",
				sale: "+8.30%",
				owners: "1.7K",
				items: "600",
			},
			{
				id: "8",
				timer: "01h 33m 18s",
				nftImage: "/img/nfts/1.webp",
				miniImage: "/img/mini/2.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/4.webp",
				creatorName: "GameDuck",
				ownerAva: "/img/owners/6.webp",
				ownerName: "NoobMaster",
				nickname: "gduck",
				nftName: "Mecha Hero",
				nftDescription:
					"Collectible mechs, each with unique abilities and powers. Ready for battle!",
				price: 4.0,
				category: "Gaming",
				collection: "Azuki",
				volume: "7,220",
				sale: "+19.70%",
				owners: "2.9K",
				items: "750",
			},
			{
				id: "9",
				timer: "06h 17m 50s",
				nftImage: "/img/nfts/2.webp",
				miniImage: "/img/mini/1.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/5.webp",
				creatorName: "Soundverse",
				ownerAva: "/img/owners/7.webp",
				ownerName: "LoudCloud",
				nickname: "sound.v",
				nftName: "Rhythm Soul",
				nftDescription:
					"A rhythmic journey into the visual world of sound and motion.",
				price: 2.2,
				category: "Music",
				collection: "BAYC",
				volume: "3,540",
				sale: "+3.00%",
				owners: "1.4K",
				items: "390",
			},
			{
				id: "10",
				timer: "08h 58m 40s",
				nftImage: "/img/nfts/3.webp",
				miniImage: "/img/mini/2.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/13.webp",
				creatorName: "LoopLord",
				ownerAva: "/img/owners/8.webp",
				ownerName: "DeeBass",
				nickname: "loop_lord",
				nftName: "Bass Beast",
				nftDescription:
					"Sound-powered beasts forged in the digital underground.",
				price: 1.6,
				category: "Music",
				collection: "Azuki",
				volume: "2,804",
				sale: "-10.50%",
				owners: "950",
				items: "200",
			},
			{
				id: "11",
				timer: "03h 27m 21s",
				nftImage: "/img/nfts/4.webp",
				miniImage: "/img/mini/1.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/12.webp",
				creatorName: "Zenith",
				ownerAva: "/img/owners/9.webp",
				ownerName: "NFTFox",
				nickname: "zen.art",
				nftName: "Silent Horizon",
				nftDescription:
					"A meditative NFT for lovers of clean design and surreal vibes.",
				price: 3.6,
				category: "Art",
				collection: "CryptoPunks",
				volume: "4,124",
				sale: "+6.80%",
				owners: "1.1K",
				items: "510",
			},
			{
				id: "12",
				timer: "05h 05m 15s",
				nftImage: "/img/nfts/5.webp",
				miniImage: "/img/mini/2.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/11.webp",
				creatorName: "RaverBit",
				ownerAva: "/img/owners/10.webp",
				ownerName: "NightDrive",
				nickname: "bitraver",
				nftName: "Wave Synth",
				nftDescription:
					"Synthwave visuals come to life in this neon-soaked NFT drop.",
				price: 2.8,
				category: "Music",
				collection: "BAYC",
				volume: "6,113",
				sale: "+17.10%",
				owners: "2.3K",
				items: "470",
			},
		],
		categories: ["Art", "Gaming", "Music"],
		collections: ["BAYC", "CryptoPunks", "Azuki"],
		selectedCategories: [],
		selectedCollections: [],
		priceSort: null,
		filteredProducts: [],
	}),

	getters: {
		hasActiveFilters() {
			return (
				this.selectedCategories.length > 0 ||
				this.selectedCollections.length > 0 ||
				this.priceSort !== null
			);
		},
	},

	actions: {
		toggleCategoryFilter(category) {
			const index = this.selectedCategories.indexOf(category);
			if (index === -1) {
				this.selectedCategories.push(category);
			} else {
				this.selectedCategories.splice(index, 1);
			}
			this.applyFilters();
		},

		toggleCollectionFilter(collection) {
			const index = this.selectedCollections.indexOf(collection);
			if (index === -1) {
				this.selectedCollections.push(collection);
			} else {
				this.selectedCollections.splice(index, 1);
			}
			this.applyFilters();
		},

		setPriceSort(order) {
			this.priceSort = order;
			this.applyFilters();
		},

		applyFilters() {
			let result = [...this.products];

			if (this.selectedCategories.length > 0) {
				result = result.filter((product) =>
					this.selectedCategories.includes(product.category)
				);
			}

			if (this.selectedCollections.length > 0) {
				result = result.filter((product) =>
					this.selectedCollections.includes(product.collection)
				);
			}

			if (this.priceSort) {
				result.sort((a, b) =>
					this.priceSort === "asc"
						? a.price - b.price
						: b.price - a.price
				);
			}

			this.filteredProducts = result;
		},

		resetFilters() {
			this.selectedCategories = [];
			this.selectedCollections = [];
			this.priceSort = null;
			this.applyFilters();
		},

		init() {
			this.filteredProducts = [...this.products];
		},
	},
});

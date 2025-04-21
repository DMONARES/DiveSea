export const useProductsStore = defineStore("products", {
	state: () => ({
		products: [
			{
				id: "3",
				timer: "2025-04-21T18:30:00Z",
				nftImage: "/img/nfts/1.webp",
				miniImage: "/img/mini/1.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/10.webp",
				creatorName: "Perperzon",
				ownerAva: "/img/owners/1.webp",
				ownerName: "Videz",
				nickname: "perperzon",
				nftName: "Sun-Glass",
				nftDescription:
					"A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.",
				price: 1.75,
				category: "Art",
				collection: "BAYC",
				volume: "8,456",
				sale: "+23.00%",
				owners: "2.2K",
				status: "sale",
				quantity: 10,
				chain: "ethereum",
				items: "500",
			},
			{
				id: "4",
				timer: "2025-04-25T18:30:00Z",
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
				status: "purchase",
				quantity: 10,
				chain: "zksync",
				items: "900",
			},
			{
				id: "5",
				timer: "2025-04-25T18:30:00Z",
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
				status: "listing",
				quantity: 10,
				chain: "solana",
				items: "420",
			},
			{
				id: "6",
				timer: "2025-04-25T18:30:00Z",
				nftImage: "/img/nfts/4.webp",
				miniImage: "/img/mini/4.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/7.webp",
				creatorName: "Cryopixel",
				ownerAva: "/img/owners/4.webp",
				ownerName: "cryopixel",
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
				status: "bid",
				quantity: 10,
				chain: "solana",
				items: "300",
			},
			{
				id: "7",
				timer: "2025-04-25T18:30:00Z",
				nftImage: "/img/nfts/5.webp",
				miniImage: "/img/mini/5.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/2.webp",
				creatorName: "BeatleArt",
				ownerAva: "/img/owners/5.webp",
				ownerName: "beatle.art",
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
				status: "transfer",
				quantity: 10,
				chain: "ethereum",
				items: "600",
			},
			{
				id: "8",
				timer: "2025-04-25T18:30:00Z",
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
				status: "mint",
				quantity: 10,
				chain: "optimism",
				items: "750",
			},
			{
				id: "9",
				timer: "2025-04-25T18:30:00Z",
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
				status: "cancel",
				quantity: 10,
				chain: "arbitrum",
				items: "390",
			},
			{
				id: "10",
				timer: "2025-04-25T18:30:00Z",
				nftImage: "/img/nfts/3.webp",
				miniImage: "/img/mini/2.webp",
				poster: "/img/posters/1.webp",
				creatorAva: "/img/creators/13.webp",
				creatorName: "LoopLord",
				ownerAva: "/img/owners/8.webp",
				ownerName: "DeeBass",
				nickname: "loop.lord",
				nftName: "Bass Beast",
				nftDescription:
					"Sound-powered beasts forged in the digital underground.",
				price: 1.6,
				category: "Music",
				collection: "Azuki",
				volume: "2,804",
				sale: "-10.50%",
				owners: "950",
				status: "purchase",
				quantity: 10,
				chain: "bnb",
				items: "200",
			},
			{
				id: "11",
				timer: "2025-04-25T18:30:00Z",
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
				status: "listing",
				quantity: 10,
				chain: "polygon",
				items: "510",
			},
			{
				id: "12",
				timer: "2025-04-25T18:30:00Z",
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
				status: "sale",
				quantity: 10,
				chain: "ethereum",
				items: "470",
			},
		],
		categories: ["Art", "Gaming", "Music"],
		collections: ["BAYC", "CryptoPunks", "Azuki"],
		selectedCategories: [],
		selectedCollections: [],
		selectedStatuses: [],
		selectedChains: [],
		priceSort: null,
		filteredProducts: [],
	}),

	getters: {
		hasActiveFilters() {
			return (
				this.selectedCategories.length > 0 ||
				this.selectedCollections.length > 0 ||
				this.selectedStatuses.length > 0 ||
				this.selectedChains.length > 0 ||
				this.priceSort !== null
			);
		},

		getCountdown: (state) => {
			return (timer) => {
				const now = Date.now();
				const end = new Date(timer).getTime();
				let diff = end - now;

				if (diff <= 0) return "00h:00m:00s";

				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				diff %= 1000 * 60 * 60 * 24;

				const hours = Math.floor(diff / (1000 * 60 * 60));
				diff %= 1000 * 60 * 60;

				const minutes = Math.floor(diff / (1000 * 60));
				diff %= 1000 * 60;

				const seconds = Math.floor(diff / 1000);

				const pad = (n) => n.toString().padStart(2, "0");

				return days > 0
					? `${days}d:${pad(hours)}h:${pad(minutes)}m`
					: `${pad(hours)}h:${pad(minutes)}m:${pad(seconds)}s`;
			};
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

		toggleStatusFilter(status, userUrl) {
			const userProducts = this.products.filter(
				(product) => String(product.nickname) === String(userUrl)
			);

			const index = this.selectedStatuses.indexOf(status);
			if (index === -1) {
				this.selectedStatuses.push(status);
			} else {
				this.selectedStatuses.splice(index, 1);
			}

			this.filteredProducts = userProducts.filter((product) =>
				this.selectedStatuses.length > 0
					? this.selectedStatuses.includes(product.status)
					: true
			);
		},

		toggleChainFilter(chain, userUrl) {
			const userProducts = this.products.filter(
				(product) => String(product.nickname) === String(userUrl)
			);

			const index = this.selectedChains.indexOf(chain);
			if (index === -1) {
				this.selectedChains.push(chain);
			} else {
				this.selectedChains.splice(index, 1);
			}

			this.filteredProducts = userProducts.filter((product) =>
				this.selectedChains.length > 0
					? this.selectedChains.includes(product.chain)
					: true
			);
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

			if (this.selectedStatuses.length > 0) {
				result = result.filter((product) =>
					this.selectedStatuses.includes(product.status)
				);
			}

			if (this.selectedChains.length > 0) {
				result = result.filter((product) =>
					this.selectedChains.includes(product.chain)
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
			this.selectedStatuses = [];
			this.selectedChains = [];
			this.priceSort = null;
			this.applyFilters();
		},

		init() {
			this.filteredProducts = [...this.products];
		},

		initUserProducts(userUrl) {
			this.filteredProducts = this.products.filter(
				(product) => String(product.nickname) === String(userUrl)
			);
		},
	},
});

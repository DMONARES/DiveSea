export const useMarketplaceStore = defineStore("marketplace", {
	state: () => ({
		cards: [
			{
				timer: "07h 09m 12s",
				img: "/img/nfts/1.png",
				title: "Sun-Glass",
				price: 1.75,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "06h 45m 08s",
				img: "/img/nfts/2.png",
				title: "Crypto Skull",
				price: 2.5,
				category: "Gaming",
				collection: "CryptoPunks",
			},
			{
				timer: "05h 30m 55s",
				img: "/img/nfts/3.png",
				title: "Moonlight",
				price: 3.1,
				category: "Music",
				collection: "Azuki",
			},
			{
				timer: "04h 20m 10s",
				img: "/img/nfts/4.png",
				title: "Golden Ape",
				price: 4.0,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "03h 15m 45s",
				img: "/img/nfts/5.png",
				title: "Neon Game",
				price: 2.8,
				category: "Gaming",
				collection: "CryptoPunks",
			},
			{
				timer: "02h 50m 22s",
				img: "/img/nfts/6.png",
				title: "Jazz Vibes",
				price: 1.95,
				category: "Music",
				collection: "Azuki",
			},
			{
				timer: "02h 10m 05s",
				img: "/img/nfts/1.png",
				title: "Abstract Art",
				price: 2.2,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "01h 55m 38s",
				img: "/img/nfts/2.png",
				title: "Pixelated Punk",
				price: 3.9,
				category: "Gaming",
				collection: "CryptoPunks",
			},
			{
				timer: "02h 50m 22s",
				img: "/img/nfts/6.png",
				title: "Jazz Vibes",
				price: 1.95,
				category: "Music",
				collection: "Azuki",
			},
			{
				timer: "02h 10m 05s",
				img: "/img/nfts/1.png",
				title: "Abstract Art",
				price: 2.2,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "07h 09m 12s",
				img: "/img/nfts/1.png",
				title: "Sun-Glass",
				price: 1.75,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "06h 45m 08s",
				img: "/img/nfts/2.png",
				title: "Crypto Skull",
				price: 2.5,
				category: "Gaming",
				collection: "CryptoPunks",
			},
			{
				timer: "05h 30m 55s",
				img: "/img/nfts/3.png",
				title: "Moonlight",
				price: 3.1,
				category: "Music",
				collection: "Azuki",
			},
			{
				timer: "04h 20m 10s",
				img: "/img/nfts/4.png",
				title: "Golden Ape",
				price: 4.0,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "03h 15m 45s",
				img: "/img/nfts/5.png",
				title: "Neon Game",
				price: 2.8,
				category: "Gaming",
				collection: "CryptoPunks",
			},
			{
				timer: "02h 50m 22s",
				img: "/img/nfts/6.png",
				title: "Jazz Vibes",
				price: 1.95,
				category: "Music",
				collection: "Azuki",
			},
			{
				timer: "02h 10m 05s",
				img: "/img/nfts/1.png",
				title: "Abstract Art",
				price: 2.2,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "01h 55m 38s",
				img: "/img/nfts/2.png",
				title: "Pixelated Punk",
				price: 3.9,
				category: "Gaming",
				collection: "CryptoPunks",
			},
			{
				timer: "02h 50m 22s",
				img: "/img/nfts/6.png",
				title: "Jazz Vibes",
				price: 1.95,
				category: "Music",
				collection: "Azuki",
			},
			{
				timer: "02h 10m 05s",
				img: "/img/nfts/1.png",
				title: "Abstract Art",
				price: 2.2,
				category: "Art",
				collection: "BAYC",
			},
			{
				timer: "01h 55m 38s",
				img: "/img/nfts/2.png",
				title: "Pixelated Punk",
				price: 3.9,
				category: "Gaming",
				collection: "CryptoPunks",
			},
		],
		filteredCards: [], // Инициализация пустым массивом
		selectedCategories: [],
		selectedCollections: [],
		priceSort: null,
		categories: ["Art", "Gaming", "Music"],
		collections: ["BAYC", "CryptoPunks", "Azuki"],
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
			// Начинаем с полного списка карточек
			let result = [...this.cards];

			// Применяем фильтр по категориям, если выбраны
			if (this.selectedCategories.length > 0) {
				result = result.filter((card) =>
					this.selectedCategories.includes(card.category)
				);
			}

			// Применяем фильтр по коллекциям, если выбраны
			if (this.selectedCollections.length > 0) {
				result = result.filter((card) =>
					this.selectedCollections.includes(card.collection)
				);
			}

			// Сортировка по цене, если выбрана
			if (this.priceSort) {
				result.sort((a, b) =>
					this.priceSort === "asc"
						? a.price - b.price
						: b.price - a.price
				);
			}

			this.filteredCards = result;
		},

		resetFilters() {
			this.selectedCategories = [];
			this.selectedCollections = [];
			this.priceSort = null;
			this.applyFilters();
		},

		init() {
			this.filteredCards = [...this.cards];
		},
	},
});

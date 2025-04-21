export const useCurrencyStore = defineStore("currency", {
	state: () => ({
		rates: {
			ETH: null,
			BTC: null,
			SOL: null,
		},
		lastFetchTime: null,
		isLoading: false,
		error: null,
	}),

	getters: {
		getRate: (state) => (currency) => state.rates[currency] || 0,
	},

	actions: {
		async fetchRates() {
			const now = Date.now();
			if (this.lastFetchTime && now - this.lastFetchTime < 5 * 60 * 1000)
				return;
			if (this.isLoading) return;

			this.isLoading = true;
			this.error = null;

			try {
				const url =
					"https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,solana&vs_currencies=usd";
				const response = await fetch(url);

				if (!response.ok)
					throw new Error(`API ответил с кодом: ${response.status}`);

				const data = await response.json();

				this.rates.ETH = data.ethereum?.usd ?? 0;
				this.rates.BTC = data.bitcoin?.usd ?? 0;
				this.rates.SOL = data.solana?.usd ?? 0;
				this.lastFetchTime = now;
			} catch (error) {
				console.error("Ошибка загрузки курсов:", error);
				this.error = error.message;

				// Fallback курсы, если совсем всё плохо
				this.rates = {
					ETH: this.rates.ETH || 2000,
					BTC: this.rates.BTC || 30000,
					SOL: this.rates.SOL || 100,
				};
			} finally {
				this.isLoading = false;
			}
		},
	},
});

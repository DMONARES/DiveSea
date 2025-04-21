export const useCurrencyStore = defineStore("currency", {
	state: () => ({
		ethToUsd: null,
		lastFetchTime: null,
		isLoading: false,
		error: null,
	}),

	actions: {
		async fetchEthToUsd() {
			const now = Date.now();
			if (
				this.lastFetchTime &&
				now - this.lastFetchTime < 5 * 60 * 1000
			) {
				return;
			}

			if (this.isLoading) return;

			this.isLoading = true;
			this.error = null;

			try {
				const response = await fetch(
					"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
				);

				if (!response.ok) {
					throw new Error(`API ответил с кодом: ${response.status}`);
				}

				const data = await response.json();

				if (data && data.ethereum && data.ethereum.usd) {
					this.ethToUsd = data.ethereum.usd;
					this.lastFetchTime = now;
				} else {
					throw new Error("Неверный формат данных от API");
				}
			} catch (error) {
				console.error("Ошибка загрузки курса:", error);
				this.error = error.message;
				if (!this.ethToUsd) {
					this.ethToUsd = 2000;
				}
			} finally {
				this.isLoading = false;
			}
		},
	},
});

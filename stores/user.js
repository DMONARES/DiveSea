export const user = defineStore('user', {
	state: () => ({
		name: 'Levan Lazarov',
		money: 5000,
	}),
	actions: {
		async changeName() {
			const names = ['Levan Laz', 'Oddy Sav', 'Even Yell', 'Morgen', 'Islam', 'Хабибушка', 'Олег Галкин']
            const newName = names[Math.floor(Math.random() * names.length)];
			this.name = newName;
		},
		addMoney() {
			this.money += 100;
		},
		setToNull() {
			this.money = 0;
		},
	},
	getters: {
		multiple: (state) => {
			return state.money * 2;
		},
	}
});
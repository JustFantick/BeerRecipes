import { create } from 'zustand';

const store = (set, get) => ({
	recipes: [],
	fetch: async () => {
		const response = await fetch(`https://api.punkapi.com/v2/beers?page=${1}`);
		set({ recipes: await response.json() });
		console.log(get().recipes[1]);
	},
	increasePopulation: () => set((state) => ({ recipes: state.recipes + 1 })),
	setNull: () => set({ recipes: 0 }),

});

export const useRecipesStore = create(store);
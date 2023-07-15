import { create } from 'zustand';

const store = (set, get) => ({
	recipes: [],
	fetchCounter: 1,
	recipeId: 1,
	fetchServersData: async () => {
		const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().fetchCounter}`);
		set((state) => ({ fetchCounter: state.fetchCounter + 1 }));
		set({ recipes: await response.json() });
	},
	markRecipeAsChosen: (id) => {
		set((state) => ({
			recipes: state.recipes.map((obj, i) => {
				if (id === obj.id) {
					return {
						...obj,
						chosen: true,
					}
				}

				return obj;
			})
		}));
	},
	removeMarkedRecipes: () => {
		set((state) => ({ recipes: state.recipes.filter(recipe => recipe.chosen === true) }));
	},
	setRecipeId: (id) => set({ recipeId: id }),
});

export const useRecipesStore = create(store);
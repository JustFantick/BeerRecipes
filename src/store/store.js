import { create } from 'zustand';

const store = (set, get) => ({
	recipes: [],
	fetchCounter: 1,
	recipeId: 1,
	renderRecipeList: true,
	fetchServersData: async () => {
		const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().fetchCounter}`);
		set((state) => ({ fetchCounter: state.fetchCounter + 1 }));
		set({ recipes: await response.json() });
	},
	markRecipe: (id) => {
		set((state) => ({
			recipes: state.recipes.map((obj, i) => {
				if (id === obj.id) {
					if (!Object.hasOwn(obj, 'chosen')) {
						return { ...obj, chosen: true };
					} else {
						return { ...obj, chosen: !obj.chosen };
					}
				}

				return obj;
			})
		}));
	},
	removeMarkedRecipes: () => {
		set((state) => ({ recipes: state.recipes.filter(recipe => recipe.chosen !== true) }));
		if (get().recipes.length < 15) get().fetchServersData();
	},
	setRecipeId: (id) => set({ recipeId: id }),
	setRenderRecipeList: (boolean) => set({ renderRecipeList: boolean }),
});

export const useRecipesStore = create(store);
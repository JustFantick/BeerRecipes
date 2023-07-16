import { create } from 'zustand';

const store = (set, get) => ({
	recipes: [],
	fetchCounter: 1,
	recipeId: 1,
	renderRecipeList: true,
	selectionCartMode: false,
	fetchServersData: async () => {
		const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().fetchCounter}`);
		set((state) => ({ fetchCounter: state.fetchCounter + 1 }));
		set({ recipes: await response.json() });
	},
	markRecipe: (id) => {
		set((state) => ({
			recipes: state.recipes.map((obj, i) => {
				if (id === obj.id) {
					if (!Object.hasOwn(obj, 'chosen') || obj.chosen === false) {
						state.setSelectionCartMode(true);
						return { ...obj, chosen: true };
					} else {
						if (state.recipes.slice(0, 15).filter(recipe => !recipe.chosen || recipe.chosen === false).length === 14) {
							state.setSelectionCartMode(false);
						}
						return { ...obj, chosen: !obj.chosen };
					}
				}

				return obj;
			})
		}));
	},
	setSelectionCartMode: (boolean) => set({ selectionCartMode: boolean }),
	removeMarkedRecipes: () => {
		set((state) => ({ recipes: state.recipes.filter(recipe => recipe.chosen !== true) }));
		get().setSelectionCartMode(false);
		if (get().recipes.length < 15) get().fetchServersData();
	},
	setRecipeId: (id) => set({ recipeId: id }),
	setRenderRecipeList: (boolean) => set({ renderRecipeList: boolean }),
	recipeListInAnim: false,
	recipePageInAnim: false,
	setRecipeListInAnim: (boolean) => set({ recipeListInAnim: boolean }),
	setRecipePageInAnim: (boolean) => set({ recipePageInAnim: boolean }),
});

export const useRecipesStore = create(store);
import React from 'react';
import { useRecipesStore } from '../../store/store.js';
import RecipeCart from '../recipeCart/recipeCart.jsx';
import DeleteButton from '../deleteButton/deleteButton.jsx';

export default function RecipeList() {
	const recipes = useRecipesStore((state) => state.recipes);

	return (
		<main className="recipe-list">
			{recipes.slice(0, 15).map(recipe =>
				<RecipeCart key={recipe.id} id={recipe.id}
					imgUrl={recipe.image_url} imgAlt={recipe.name + '_img'}
					cartName={recipe.name}
					description={recipe.description}
					author={recipe.contributed_by} date={recipe.first_brewed}
				/>
			)}

			<DeleteButton />
		</main>
	)
}

import React from 'react';
import { useRecipesStore } from '../../store/store.js';
import RecipeCart from '../recipeCart/recipeCart.jsx';
import { useEffect } from 'react';

export default function RecipeList() {
	const recipes = useRecipesStore((state) => state.recipes);

	useEffect(() => {
		//console.log(recipes);
	}, [recipes]);

	const arr = [{ name: 'jack' }, { name: 'two' }, { name: 'three' }]

	return (
		<main className="recipe-list">
			{recipes.map(recipe =>
				<RecipeCart key={recipe.id} id={recipe.id}
					imgUrl={recipe.image_url} imgAlt={recipe.name + '_img'}
					cartName={recipe.name}
					description={recipe.description}
					author={recipe.contributed_by} date={recipe.first_brewed}
				/>
			)}
		</main>
	)
}

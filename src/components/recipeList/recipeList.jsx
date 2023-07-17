import React from 'react';
import { useRecipesStore } from '../../store/store.js';
import RecipeCart from '../recipeCart/recipeCart.jsx';
import DeleteButton from '../deleteButton/deleteButton.jsx';

import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function RecipeList() {
	const recipes = useRecipesStore(state => state.recipes);

	const inAnim = useRecipesStore(state => state.recipeListInAnim);
	const setRecipeListInAnim = useRecipesStore(state => state.setRecipeListInAnim);

	useEffect(() => {
		setRecipeListInAnim(true);
	}, [])

	const removeMarkedRecipes = useRecipesStore(state => state.removeMarkedRecipes);
	const selectionCartMode = useRecipesStore(state => state.selectionCartMode);

	const [listRef] = useAutoAnimate();

	return (
		<CSSTransition
			in={inAnim} timeout={300}
			classNames='recipe-list'
			mountOnEnter unmountOnExit
		>
			<main className="recipe-list" ref={listRef}>
				{recipes.slice(0, 15).map(recipe =>
					<RecipeCart key={recipe.id} id={recipe.id}
						imgUrl={recipe.image_url} imgAlt={recipe.name + '_img'}
						cartName={recipe.name}
						description={recipe.description}
						date={recipe.first_brewed}
					/>
				)}

				<DeleteButton onClick={removeMarkedRecipes} in={selectionCartMode} />
			</main>
		</CSSTransition>
	)
}

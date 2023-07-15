import React, { useEffect } from 'react';
import { useRecipesStore } from '../store/store';

import RecipeList from './recipeList/recipeList.jsx';
import RecipePage from './recipePage/recipePage.jsx';

export default function App() {
	const fetchServersData = useRecipesStore(state => state.fetchServersData);
	const renderList = useRecipesStore(state => state.renderRecipeList);

	useEffect(() => {
		fetchServersData();
	}, []);

	return (
		<div className="wrapper">
			{renderList ? <RecipeList /> : <RecipePage />}
		</div>
	)
}
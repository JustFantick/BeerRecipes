import React, { useEffect } from 'react';
import { useRecipesStore } from '../store/store';

import RecipeList from './recipeList/recipeList.jsx';

export default function App() {
	const fetchServersData = useRecipesStore((state) => state.fetchServersData);

	useEffect(() => {
		fetchServersData();
	}, []);

	return (
		<div className="wrapper">
			<RecipeList />

		</div>
	)
}
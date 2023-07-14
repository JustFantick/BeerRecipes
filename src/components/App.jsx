import React, { useEffect } from 'react';
import { useRecipesStore } from '../store/store';

import RecipeList from './recipeList/recipeList.jsx';

export default function App() {
	const fetchData = useRecipesStore((state) => state.fetch);

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="wrapper">
			<RecipeList />

		</div>
	)
}
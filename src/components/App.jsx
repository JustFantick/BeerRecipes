import React, { useEffect, useState } from 'react';
import { useRecipesStore } from '../store/store';

export default function App() {
	const recipes = useRecipesStore((state) => state.recipes);
	const fetchData = useRecipesStore((state) => state.fetch);

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="wrapper">
			Got from store: {recipes.length !== 0 ? recipes[0].name : 'null'}
		</div>
	)
}
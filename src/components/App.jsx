import React, { useEffect, useState } from 'react';

export default function App() {
	const [serverData, setServerData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setServerData([]);

			const response = await fetch(`https://api.punkapi.com/v2/beers?page=${1}`);
			const data = await response.json();

			if (!ignore) {
				console.log(data);
				setServerData(await data);
			};
		}

		let ignore = false;
		fetchData();

		return () => {
			ignore = true;
		}
	}, []);

	return (
		<div className="wrapper">

		</div>
	)
}
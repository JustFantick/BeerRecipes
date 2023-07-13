import React, { useState } from 'react';
import background from "../img/bg1.webp"
import Main from "./main/main.jsx";

export default function App() {
	return (
		<div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
			Beer recipes
		</div>
	)
}
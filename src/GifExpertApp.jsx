import React, { useState } from 'react';
import GifGrid from './components/GifGrid';
import AddCategory from './components/AddCategory';

export default function GifExpertApp() {
	const [categories, setCategories] = useState(['Dragon Ball']);

	return (
		<>
			<h2>Gif Expert App</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
}

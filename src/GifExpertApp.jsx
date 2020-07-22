import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

export default function GifExpertApp() {
	const [categories, setCategories] = useState([
		'One Punch',
		'Samurai X',
		'Dragon Ball',
	]);

	return (
		<>
			<h2>Gif Expert App</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					<li key={category}>{category}</li>
				))}
			</ol>
		</>
	);
}

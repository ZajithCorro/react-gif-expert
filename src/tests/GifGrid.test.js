import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGrid from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const category = 'Pokemon';

	test('Debe de mostrar el componente correctamente ', () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar los items cuando se cargan las imágenes', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https//localhost/imagen.png',
				title: 'Titulo de la imagen',
			},
			{
				id: 'ABD',
				url: 'https//localhost/imagen.png',
				title: 'Titulo de la imagen',
			},
			{
				id: 'ABE',
				url: 'https//localhost/imagen.png',
				title: 'Titulo de la imagen',
			},
		];
		useFetchGifs.mockReturnValue({ data: gifs, loading: false });
		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});

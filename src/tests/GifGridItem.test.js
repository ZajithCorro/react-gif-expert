import React from 'react';
import { shallow } from 'enzyme';
import GridItem from '../components/GifGridItem';

describe('Pruebas en <GridItem />', () => {
	const title = 'Título de la imágen';
	const url =
		'https://media0.giphy.com/media/NMufrvxO8fC3C/giphy.gif?cid=ecf05e47989a12cb847231877cd49432bb41eb1a4ec33b23&rid=giphy.gif';
	const wrapper = shallow(<GridItem title={title} url={url} />);

	test('Debe de mostrar el componente correctament ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un parrafo con el título', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('Debe de tener la imagen igual a la url ', () => {
		const img = wrapper.find('img');
		const { src, alt } = img.props();

		expect(title).toBe(alt);
		expect(url).toBe(src);
	});

	test('Debe de tener animate__fadeIn ', () => {
		const div = wrapper.find('div');
		const { className } = div.props();
		expect(className.includes('animate__fadeIn')).toBe(true);
	});
});

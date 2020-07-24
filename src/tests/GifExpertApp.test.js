import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	test('Debe de mostrar el componente correctamente', () => {
		const wrapper = shallow(<GifExpertApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar la lista de las categorias', () => {
		const categories = ['Dragon Ball', 'Pokemon'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});

import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('Debe de mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de cambiar el input', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';

		input.simulate('change', { target: { value } });
	});

	test('No debe de postear la información onSubmit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de lleamar el setCategories y limpiar la caja de texto', () => {
		const value = 'Hola mundo';

		wrapper.find('input').simulate('change', { target: { value } });

		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).toHaveBeenCalled();

		expect(wrapper.find('input').prop('value')).toBe('');
	});
});

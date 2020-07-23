import { getGifs } from '../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
	test('Debe de trar 10 elementos ', async () => {
		const gifs = await getGifs('Pokemon');
		expect(gifs.length).toBe(10);
	});

	test('Debe de regresar un array vacio', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});

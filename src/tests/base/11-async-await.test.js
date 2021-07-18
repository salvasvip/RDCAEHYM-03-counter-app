import {getImagen} from "../../base/11-async-await";

describe('Pruebas con async-await y fetch', () => {
    // then
    test('debe de retornar el url de la imagen', async () => {
        const apiKey = 'd3euxrgy4Um59XUngA1tD8mVoROeHke7';
        const url = await getImagen(apiKey)
        expect(url.includes('https://')).toBe(true)
    });
    // catch
    test('debe de retornar No existe', async () => {
        const apiKey = 'd3euxrgy4Um59XUngA1tD8mVoROeHke7--';
        const url = await getImagen(apiKey)
        expect(url).toEqual('No existe')
    })
});
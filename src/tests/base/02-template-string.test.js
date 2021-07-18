import {getSaludo} from "../../base/02-template-string";

describe('Pruebas en 02-template-strings', () => {
    test('getSaludo debe de retornar Hola Salvador', () => {
        const nombre = 'Salvador';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })
    test('getSaludo debe de retornar Hola Salvador si no hay argumento', () => {
        const nombre = 'Salvador';
        const saludo = getSaludo();
        expect(saludo).toBe('Hola ' + nombre);
    })
})

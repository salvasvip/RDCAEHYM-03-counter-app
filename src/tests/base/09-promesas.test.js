import {getHeroeByIdAsync} from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un hero async', (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0])
                done();
            })
    })
    test('getHeroeByIdAsync error con id heroe inexistente', (done) => {
        const id = 10
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done();
            })
    })
})
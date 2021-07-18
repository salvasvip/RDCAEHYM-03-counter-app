import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones de heroes', () => {
    test('debe retornar un heroe por id', () => {
        const numeroHeroes = Object.keys(heroes).length;
        for (let id = 1; id < numeroHeroes + 1; id++) {
            const heroe = getHeroeById(id);
            const heroeData = heroes.find(h => h.id === id);
            expect(heroe).toEqual(heroeData);
        }
    });
    test('debe retornar undefined si el heroe no existe', () => {
        const id = 10;
        for (let i = 0; i < id; i++) {
            const heroe = getHeroeById(i + 6);
            // const heroeData = heroes.find(h => h.id === id);
            expect(heroe).toBe(undefined);
        }
    });
    test('expect owner:DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData);
    });
    test('expect owner:DC', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe.length).toBe(heroeData.length);
    });

})
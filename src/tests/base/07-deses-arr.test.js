import {retornaArreglo, useState} from "../../base/07-deses-arr";

test('debe retornar un string y un numero', () => {
    const [letra, numero] = retornaArreglo();
    expect(letra).toEqual('ABC');
    expect(typeof letra).toEqual('string');
    expect(numero).toEqual(123);
    expect(typeof numero).toEqual('number');
    console.log(numero);
});


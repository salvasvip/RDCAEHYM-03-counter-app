import {getUser, getUsuarioActivo} from "../../base/05-funciones";

test('getUser Debe retornar un objeto', ()=>{
    const userTest = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    })

    const user = getUser();
    expect(user).toStrictEqual(userTest())
})
test('getUsuarioActivo Debe retornar un objeto con un argumento', ()=>{
    const nombre = 'Salvador'
    const userTest = ( nombre ) =>({
        uid: 'ABC567',
        username: nombre
    })

    const esperado = getUsuarioActivo(nombre);
    const recibido = userTest(nombre);
    expect(esperado).toStrictEqual(recibido)
})
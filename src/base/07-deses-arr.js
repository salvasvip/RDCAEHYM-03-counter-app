
const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;

export const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

export const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

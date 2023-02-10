//Cuando utilizo el "export" es como decir "esta funcion que esta aca va a ser utilizada por otro archivo" en este caso sera ecmascriptModules.js mediante import
export function add(x , y){
    return x + y
}

export function multiply(x, y){
    return x * y
}

//Puedo exportar de todo, por ejemplo constantes y arreglos

export const title = 'Modules for JS'
export const active = false
export const points = [10, 20, 30]
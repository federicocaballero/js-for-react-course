//Es otra forma de escribir funciones

//Esta es una funcion comun 
function add(x, y){
    return x + y
}

//Esta es su equivalente en arrowFunction
const addArrowFunction = (x, y) => {
    return x + y
}

//Si llamo ambas funciones podemos ver que la forma de hacerlo es la misma y funcionan igual
console.log(add(2,3));
console.log(addArrowFunction(6,4))
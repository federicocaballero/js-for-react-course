const names = ['Maria','Marcos', 'Ryan', 'Marcos', 'Marcelo']

//No se usan tanto los bucles como For o while, es mas comun usar 
//ForEach: recorre el arreglo y muestra sus elementos
console.log('##ELEMENTOS MOSTRADOS CON FOREACH##')
names.forEach(element => {
    console.log(element)   
});


//Map: recorre el arreglo y me retorna un nuevo arreglo
console.log('##ELEMENTOS MOSTRADOS CON MAP##')
names.map(element => {
    console.log(element)
})

//Lo demuestro aca creando un const con el mismo codigo adentro y cuando lo muestro por consola me devuelve un arreglo
// console.log('##ARRAY DE MAP##')
// const newNames = names.map(element => {
//     return element
// })
// console.log(newNames)

//Esto lo puedo usar para por ejemplo modificar los valores que tenia en mi array original y mostrarlos en uno nuevo
//Por ejemplo

console.log('## NUEVO ARRAY DE ELEMENTOS MODIFICADOS CON MAP##')
const namesModified = names.map(element => {
    return `Hola ${element}`
})

console.log(namesModified)



//Find: recorre el arreglo en busca de un elemento y usa una condicion para retornar algo en caso de encontrarlo o no

const namesFound = names.find(element => {
    if (element === 'Marce'){
        return element
    }
})

console.log(namesFound)


//Filter: nos permite crear un nuevo arreglo con elementos que hayamos filtrado, es decir recorre el arreglo y va añadiendo al nuevo arreglo a los elementos que cumplan con la condicion que le damos

const namesFilter = names.filter(element => {
    if (element !== 'Marcos'){
        return element
    }
})

console.log (namesFilter)


//Concat: Podemos juntar 2 arreglos en uno nuevo
//Names -> es el arreglo original creado primero
//NewNames -> es el arreglo nuevo que vamos a concatenar con el original

//la sintaxis es arreglo1.concat(arreglo2)
const newNames = ['Sofia', 'Julieta', 'Ana', 'Belen']
const newArray = names.concat(newNames)

console.log(newArray)
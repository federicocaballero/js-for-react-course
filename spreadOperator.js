const names = ['Ariel', 'Alfa', 'Nacho', 'Maxi']
const newNames = ['Sofia', 'Julieta', 'Ana', 'Belen', 'Romina']
const newArray = names.concat(newNames)

// console.log(newArray)


//Supongamos que quiero concatenar estos arreglos pero no quiero usar el metodo concat
//Entonces uso el spread operator -> "console.log([...arreglo1, ...arreglo2])" 

console.log([...names, ...newNames])

//Lo que hago es decirle al console.log -> agarra todos los elementos del primer arreglo y todos los del segundo arreglo y metelos todos en un nuevo arreglo 


//Esto tambien funciona con objetos

const user = {
    name: 'Fede',
    lastName: 'Caballero'
}

const adress = {
    street: 'Armenia 4731',
    city: 'Corrientes'
}

//Entonces quiero crear un nuevo objeto a partir de estos 2 anteriores 
const  userInfo = {
    ...user,
    ...adress
}

console.log(userInfo)

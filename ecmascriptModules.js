//Dividir la aplicacion en varios archivos se le conoce como "modulos" o "ecmascript modules"
//Aca usamos la fucnion contenida en el archivo add.js utilizando la sintaxis de "import"

import {add, multiply, title, active, points} from "./add.js"
//Funcion suma
console.log( add(10, 20)) //Asi de la nada no funciona porque primero tenemos que agregar la funcion de "type=module" en el index

//Funcion multiplicacion
console.log(multiply(5,3)) 

//Constante title
console.log(title)

//Constante active
console.log(active)

//Array points
console.log(points)

function prueba(){
    if(active){
        console.log(title)
    }else{
        console.log('no anda')
    }
}

prueba()


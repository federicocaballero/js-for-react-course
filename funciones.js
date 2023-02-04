//FUNCIONES

//FUNCION BASICA: retorna algo por consola
function hello(){
    console.log("holis")
}

hello(); //llamo a la funcion

//FUNCION QUE RETORNA ALGO
//Por si sola no muestra nada en consola
function retornaTexto(){
    return 'Texto retornar'
}

//Tengo que guardar su valor en una variable y ahi si podria mostrar su valor en un console.log

const retorno = retornaTexto(); //Guardo en la variable
console.log(retorno); //Muestro el valor usando la variable

//O uso directamente la funcion en el console.log
console.log('Desde el console -> ' + retornaTexto());

//Tambien puede retornar valores
function retornarValor(){
    return 3;
}
console.log('Desde el console -> ' + retornarValor());


//FUNCIONES QUE RECIBEN PARAMETROS
function usaParametros(num1, num2){
    return num1 + num2; 
}

console.log('1º Suma es = ' + usaParametros(2,3));
console.log('1º Suma es = ' + usaParametros(4,3));
console.log('1º Suma es = ' + usaParametros(5,8));


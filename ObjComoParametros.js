//Hay veces que recibimos un objeto como parametro de una funcion
//y es posible que debamos utilizar su informacion y mostrarla dentro
//del DOM

const user1 = {
    name: 'Fede',
    age: 35
}

const user2 = {
    name: 'Marcos',
    age: 29
}
function printInfo(obj){
    return '<h1>Hola ' + obj.name + '</h1>';
}

//puedo usar la misma funcion con distintos objetos como parametro
document.body.innerHTML = printInfo(user1)
document.body.innerHTML = printInfo(user2)
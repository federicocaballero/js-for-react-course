//Esta es la funcion primordial de Javascript dentro del FrontEnd
//Mediante Javascript que al estar enlazado a nuestro HTML podemos 
//lograr manipular y modificar el HTML

//Creando elementos de HTML desde Javascript
//Creando un titulo
const title = document.createElement('h1'); 
title.innerText= 'Hola mundo desde JS';
document.body.append(title)

//Creando un boton
const button = document.createElement('button'); //creo el elemento
button.innerText = 'Boton desde JS'; //Le doy el texto que se muestra en el DOM
document.body.append(button); //lo agrego al DOM


//A este boton podemos darle una funcion mediante una ESCUCHA
//y tambien modificar otros elementos dentro del DOM
//En este caso cuando se haga un click vamos a actualizar el title
button.addEventListener('click', function(){
    title.innerText = "Texto actualizado mediante el evento click del boton";
    alert('Se modificara el texto')
})


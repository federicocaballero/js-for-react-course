//Son funciones que no tienen nombre
//Se pueden ejecutar funciones directamente sin darles un nombre propio

//Funcion comun
function start(){
    return 'Starting...'
}

//La llamo
console.log(start())


//FUNCION ANONIMA
//La puedo ejecutar directamente desde el console.log
//Utilizando esta sintaxis

console.log( 
    function(){
    return 'Esta es la funcion anonima';
}() 
)


//Esto tiene su utilidad cuando trabajamos con escuchas y eventos 

//Creo el boton
const button = document.createElement('button');

//Le doy un texto
button.innerText = 'Click me'; 

//Le asigno el evento y su funcion
button.addEventListener('click', function(){
    alert('Esta es la funcion anonima del button')
});

//Lo agrego al DOM
document.body.append(button);
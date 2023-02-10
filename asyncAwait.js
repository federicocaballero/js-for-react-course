// Con este concepto podemos pedir datos a un backend y manipularlos

//FETCH me permite poder colocar una direccion a la cual le voy a pedir los datos que necesito
// const data = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(data) //de esta forma solo me devuelve una "promesa", esto es asi porque mientras el navegador esta pidiendo datos puede ir haciendo otras cosas, osea ejecutando codigo. Esto se llama ASINCRONIA

//Creo los elementos HTML que voy a usar para mostrar la informacion en el DOM
const ul = document.createElement('ul')


//Entonces podemos manejarlo de esta manera con .then que es como decir "ENTONCES cuando acabe esta funcion, voy a hacer tal cosa"
// fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
//     console.log(response) //Aca ya me trae los datos, pero para que el navegador pueda interpretarlo los debo convertir al formato json
//     return response.json()
//     //ENTONCES (por eso otro .then cuando termine esto) yo voy a recibir los datos como parametros en otra funcion
// }).then(function(data){
//     console.log(data) //Y a partir de aca ya podemos ver los datos de la misma forma que en la API al principio y podemos manipularlos y mostrarlos en el DOM
//     //una vez tenemos los datos necesitamos recorrer el objeto de datos 
//     data.forEach(post => {
//         //En cada elemento(post) que recorra me va a crear un li y dentro de ese li me va a colocar el atributo title
//         const li = document.createElement('li') //En este elemento es donde vamos a mostrar cada uno de los titulos que nos da la api
//         li.innerText = post.title;

//         //Y lo añado al ul
//         ul.append(li)
//     }); //Cuando termina de recorrerlo voy a añadir al DOM el ul
//     document.body.append(ul)
// })

//Si prestamos atencion en la consola nos muestra primero este console.log, esto se debe al tema de la asincronia. Mientras se termina de ejecutar el codigo del fetch el navegador seguira con lo demas
console.log('linea mientras carga los datos')

//Todo lo que escribimos con el .then se puede simplicar usando ASYNC Y AWAIT
//Hay que colocar todo el codigo dentro de una funcion asincrona
async function loadData(){
    //entonces empiezo solicitando los datos al backend con FETCH, pero se debe anteponer la palabra clave AWAIT para avisar al navegador que es codigo asincrono y no nos de un error

    //Lo guardo en una variable para luego convertir esa variable a json
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

    const datita = await respuesta.json() //aca lo convierto en formato json, anteponiento la palabra AWAIT porque tambien es codigo asincrono y guardando todo en una variable
    console.log(datita) //y aca me muestra el objeto con los datos adentro
 
    //una vez tenemos los datos necesitamos recorrer el objeto de datos 
     datita.forEach(post => {
         //En cada elemento(post) que recorra me va a crear un li y dentro de ese li me va a colocar el atributo title
         const li = document.createElement('li') //En este elemento es donde vamos a mostrar cada uno de los titulos que nos da la api
         li.innerText = post.title;

         //Y lo añado al ul
         ul.append(li)
     }); //Cuando termina de recorrerlo voy a añadir al DOM el ul
     document.body.append(ul)
}

loadData(); //Llamo a la funcion y es exactamente el mismo resultado que con la sintaxis anterior




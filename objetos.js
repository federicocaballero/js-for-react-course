
//OBJETOS
const user = {
    name: 'Peter',
    lastName: 'Capusotto',
    age: 64,
    //dentro de un objeto podemos colocar otro objeto
    adress: {
        country: 'Argentina',
        city: 'Buenos Aires'
    },
    //Tambien podemos almacenar un array
    friends: ['Manuel', 'Clara', 'Marcelo', 'Silvina'],
    
    //Tambien almacenar valores booleanos
    active: true,

    //Y tambien una funcion
    sendMail: function(){
        return 'Sending mail...';
    }
}

//Y mediante el nombre del objeto y un . puedo acceder a todos sus atributos 
console.log(user.name);
console.log(user.sendMail());
console.log(user.adress.city)


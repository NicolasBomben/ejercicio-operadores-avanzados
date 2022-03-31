//armo objetos de usuarios
const usuario1 = {
    nombre: "nicolas",
    edad: 24,
    curso: "javascript"
}
//con el operador spread agrego y modifico datos.
const usuario2 = {
    ...usuario1,
    nombre: "Facundo",
    curso: "Angular"
}

const usuario3 = {
    ...usuario1,
    nombre: "Juan",
    curso: "NodeJs",
    email: "juan@gmail.com"
}

//hago uso del operador ternario para ver si los usuarios son iguales o diferentes
usuario1 != usuario3 ? alert("Usarios diferentes") : alert("Usuarios iguales");

//desestructuro el email para comprobar quienes lo ingresaron y quienes no.
const { email } = usuario3;


email != usuario1 || usuario2 ? alert(`Estos Usarios no registraron sus emails ${usuario1.nombre},${usuario2.nombre}`) : alert("El email de los usuarios es...");

alert(`El unico email registrado es ${email}`);



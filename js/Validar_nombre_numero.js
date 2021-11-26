var nombre= /^\w+\s\w+$/g
var ingresar = "Kevin Estiven";
if (nombre.test(ingresar)) {
    console.log("Nombre correcto");
}
else {
    console.log("Nombre incorrecto");
}

var numero = /^\d{3}[\s]\d{3}[\s]\d{2}[\s]\d{2}$/m;
var telefono = "320 960 22 98";
if (numero.test(telefono)) {
    console.log("Numero correcto");
}
else {
    console.log("Numero incorrecto");
}













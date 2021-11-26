//Identificación :

let v_cedula=/^\d{10}$/
var cedula="1000443973"
if(v_cedula.test(cedula)){
    console.log("Numero valido")
}else{
    console.log("Numero invalido")
}

//Nombres completos:

let v_nombre=/[a-zA-Z]\s[a-zA-Z]/m
var nombre="Kevin Estiven"
if(v_nombre.test(nombre)){
    console.log("Nombre valido")
}
else{
    console.log("Nombre invalido")
}

//Apellidos completos:

let v_apellido=/[a-zA-Z]\s[a-zA-Z]/m
var apellido="Arroyave Sepúlveda"
if(v_apellido.test(apellido)){
    console.log("Apellido valido")
}
else{
    console.log("Apellido invalido")
}

//Dirección:

let v_direccion=/^(cr|cl)\s\d+[A-Z]\s[#]\d+[-]\d+\w?$/
var direccion="cr 60A #32-64"
if(v_direccion.test(direccion)){
    console.log("Direccion valida")
}
else{
    console.log("Direccion invalida")
}

//Correo electrónico:

let v_correo=/^[A-Za-z]{1,64}\d{1,20}(@gmail.com)$/
var correo="keas1126@gmail.com"
if(v_correo.test(correo)){
    console.log("Correo valido")
}
else{
    console.log("Correo invalido")
}

//Usuario:

let v_usuario=/^[A-Za-z]{1,10}\d{1,10}$/
var usuario="kevin2000"
if(v_usuario.test(usuario)){
    console.log("Usuario valido")
}
else{
    console.log("Usuario invalido")
}

//Contraseña:

let v_contraseña=/^[A-Za-z\d]{8}$/
var contraseña="keas1126"

if(v_contraseña.test(contraseña)){
    console.log("Contraseña valida")
}
else{
    console.log("Contraseña invalida")
}

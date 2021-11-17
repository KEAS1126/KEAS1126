// 3. Ejercicios de JAvascript:Se desea hacer un préstamos donde la tasa anual es del 1.2 %,
// pero cada año del préstamo aumenta en un 0.005% la tasa, se desea calcular el valor del
// préstamo si es un monto de 600000, a 3 años.
// a)¡cual es el valor de la cuota mensual
// b) cual es el valor del pago trimestral
// c) cual es el valor en dos años
// d) cual es el valor a pagar al final

var tasa_anual=0.012
var tasa_anual_año=0.00005
var monton=600000
var tasa_anual_un_año=tasa_anual+tasa_anual_año
var tasa_anual_dos_años=tasa_anual_un_año+tasa_anual_año
var cuota_mensual=tasa_anual*monton/12
var cuota_trimestral=tasa_anual*monton/4
var valor_dos_años=tasa_anual_dos_años*monton
var valor_final=(tasa_anual+tasa_anual_año+tasa_anual_un_año+tasa_anual_dos_años)*monton
console.log(cuota_mensual)
console.log(cuota_trimestral)
console.log(valor_dos_años)
console.log(valor_final)


// 4. se tiene una maquina impresora que por segundo imprime hasta 10 unidades de hojas, si
// se ingresan 1200 unidades cual es el tiempo de respuestas de la impresora.
var imprimir=10
var unidades=1200/imprimir;
console.log("tiempo de respuesta: "+unidades+" segundos")



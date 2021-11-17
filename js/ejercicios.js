var nombre="Kevin";
var apellido="Arroyave";
var telefono=3209602298;


console.log(nombre);
//un profesional recibe de salario 1900000 y recibe de comicion y bonificacion 10 % por cada uno, dentro 
//de sus gastos paga un 30% en vivienda
//un 10% en estudios, un 10% en alimentacion  de los ingresos que recibe cada mes y en deduciones 
//abona un 10 mas de salario para pagos adicionales
// entonces cuanto dinero le queda disponible y cuanto es el total de los gastos

var salario=1900000;
var comision=salario*0.10;
var bonificacion=salario*0.10;
var ingresos=comision+bonificacion;
var vivienda=ingresos*0.30;
var estudios=ingresos*0.10;
var alimentacion=ingresos*0.10;
var pagos_adicionales=ingresos*0.10;
var total_gastos=vivienda+estudios+alimentacion+pagos_adicionales;
var dinero_disponible=ingresos-total_gastos;
console.log("total gastos:"+total_gastos);
console.log(dinero_disponible)

//se tiene un area de 1000 hectareas y se desea construir con dominios 500 metros cuadrados
//cuantas casas se pueden construir
var hectarea=10000
var area=1000
var dominios=500
var area_neta=hectarea*area
var casas=area_neta/dominios

console.log("numero de casa:"+casas)

// Un banco hace un prestamos con una taza anual del 13%, se requiere saber cual es la cuota mensual
// a pagar si se realiza un prestamos de 5 millones a 2 años¿ cuanto dinero paga en total?, ¿ cuanto dinero paga mensual?
// y ¿cuanto dinero paga en la mitad del prestamo?

var prestamo=5000000
const tasa=prestamo*0.13
var prestamo_anual=prestamo+tasa
var prestamo_final=prestamo_anual*2
var prestamo_mensual=prestamo_anual/12


console.log("el valor mensual del prestamo: "+prestamo_mensual)
console.log("el valor a la mitad del prestamo: "+prestamo_anual)
console.log("el valor final del prestamo: "+prestamo_final)







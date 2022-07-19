//Calculador de horas extras

let contrasenia;
const CONTRATOA=90500;
let hora=900;

for(let i=1; i<=3; i++){
    contrasenia=prompt("Ingrese contraseña:");
    if(contrasenia==123){
        console.log("Bienvenido Usuario. Vamos a calcular tus horas extras de este mes")
        break;
    }else{
        console.log("Contraseña incorrecta. Te quedan "+(3-i)+" intento/s");
    }
}
let horasExtras=parseInt(prompt("Ingresá la cantidad de horas extras trabajadas durante el último mes:"));
console.log("Su salario con "+(horasExtras)+" horas extras será de: "+(hora*horasExtras+CONTRATOA)+" pesos.");

/**condicionales **/
let numero = 5 ;//10;4;5
console.log("es " + numero +" > " + 5);
console.log("respuesta: ", numero > 5); // true

if (numero > 5) {
    console.log("El numero es mayor que 5");
}else if(numero < 5){
    console.log("El numero es menor que 5");
}else{//resultado por default
    console.log("El numero es igual a 5");
}

/** bucles **/
/**
 * FOR
 * * */
// i++ => i = i+1

for (let i =0; i <= 5; i++) {
    console.log(i);
} 

console.info("Fuera del for");

/**
 * While
 * 
 */

var i = 0;

while (i < 3) {
    console.log(" el valor de i es: ",i)//1,2
    i++;//i=1
}
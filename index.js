var nop = "Jesus"
var empty;
/*
    entero - int
    double - decimal
    boolean - boolean
*/
var condicion = false
empty = "No esta vacio"
console.log(empty);

var edad = Math.random() * 20
console.log(edad)
// Estructura de control
if(edad >= 18) { // Si (Se cumple esta condicion)
    console.log("Mayor de edad");
} else { // Si no se cumple has esto
    console.log("Menor de edad")
}

// Bucles
var asdasdas = []
var fruits = []
var vegetals = []
var g;
g = 10;
g = 1
var t = 10
g = 16

var edad = 0
edad = 10
edad = 0
var nombre = "carlos"
g = 1203

while(edad != 1000000000000) 
{ // Mientras (la condicion se cumpla) 20
    if ( edad >= 0 && edad < 18 && nombre == "carlos" ){ // si
        console.log("Carcel", edad)
    } else if ( nombre == "carlos" ) {// Si no 18
        nombre = "Carloz"
    } else if ( nombre == "Carloz" ) {// Si no 19
        nombre = "Karlos"
    } else if (edad == 20) {

    } else { // Entonces 20
        console.log("Legal", edad)
        break
    }
    edad++
}

for (var index = 0; index < 100; index++) {
    fruits.push(index);
}

console.log(fruits.length)

edad = 55

switch (edad) {// Seleccion de Casos ( dato a evaluar )
    case 18: // caso
        console.log("se vacuna")
        break;
    case 60:
        console.log("refuerzo")
        break;
    default:
        console.log("No te tocaba carnal")   
        break;
}


console.log(g)
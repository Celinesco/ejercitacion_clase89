console.log("HOLA")



// Ejercicio 1
// const edad = 19

// if (edad >= 18) {
//   alert("Es mayor de edad!")
// }

//OPERADOR DE CORTOCIRCUITO :

// edad >= 18 && alert("Es mayor de edad!")

// 

// EJERCICIO 2

// const edad = 12
// if (edad >= 18) {
//   alert("Es mayor de edad!")
// }
// else {
//   alert("Es menor de edad!")
// }

// //OPERADOR TERNARIO

// edad >= 18 ?alert("Es mayor de edad!") :alert("Es menor de edad!")

//EJERCICIO 3

// const sumar = (num1, num2) => {
//   return num1 + num2
// }

// const sumarRI = (num1,num2) => num1 + num2

// console.log(sumarRI(1,10))


// EJERCICIO 4

// let losMasCaros0 = (costos) => {
//     return costos.filter(function mayores(precio) {
//       return precio > 50
//     })
 
//   }
 
// // escribir esto con retorno implicito

// const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]

// let losMasCaros = costos => costos.filter(precios => precios >50)

// console.log(losMasCaros(costos))
// console.log(losMasCaros0(costos))


//escribir con operador ternario o de cortocircuito y con retorno implicito

/*const puedeVerPelicula = (edad,autorizacion) => {
  if (edad > 15) {
    return true
  }
  return autorizacion;
}*/

// const puedeVerPelicula = (edad,autorizacion) => edad > 15 ? true :autorizacion 



// const estaEnRango = (num1, min, max) => {
//     if (num1 === min || num1 === max) {
//     return true;
//     }
//     else if (num1 < min || num1 > max) {
//       return false;
//     }
//     return true;
//   }


//   const estaEnRango = (num1,min,max) => !(num1 < min || num1 > max)

const puedeAvanzar = luz => luz === "verde"

/*const esVocal = (letra) => {
  return (letra ==="a" || letra ==="e" || letra === "i" || letra === "o" || letra === "u") 
}*/

const esVocal = letra => letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"



const esConsonante = letra => !esVocal(letra)
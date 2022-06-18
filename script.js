let ejecucion = true
let numero1, numero2
let resultado = 0

//Se solicita un numero par el cual se va a sumar a si mismo la veces que quieran.

numero1 = parseInt(prompt("Número a sumar solo pares"))
numero2 = parseInt(prompt("Veces a sumar"))

if(numero1 % 2 == 0){
   for ( let i = 1; i <= numero2; i++) {
      console.log(resultado += numero1)
   }

   alert(resultado)
}




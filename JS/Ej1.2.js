//Ejercicio 1
const potConduir = (edat) => edat >= 18 ? 'Pots conduir' : 'No pots conduir'

console.log("Ej 1:", potConduir(18))
console.log("Ej 1:", potConduir(17))

//Ejercicio 2
const numMesGran = (num1, num2) => num1 > num2 ? 'num1 és més gran' : 'num2 és més gran'

console.log("Ej 2", numMesGran(10, 5))
console.log("Ej 2", numMesGran(10, 50))

//Ejercicio 3
const tipusNum = num =>
  num > 0 ? 'Positiu' :
  num < 0 ? 'Negatiu' :
    'Zero'

console.log("Ej 3.1:", tipusNum(1))
console.log("Ej 3.1:", tipusNum(-1))
console.log("Ej 3.1:", tipusNum(0))

const trobarMaxim = (a, b, c) =>
  a > b
    ? (a > c ? a : c)
    : (b > c ? b : c)

console.log("Ej 3.2 (a):", trobarMaxim(50, 10, 3))
console.log("Ej 3.2 (b):", trobarMaxim(50, 100, 3))
console.log("Ej 3.2 (c):", trobarMaxim(50, 10, 300))

//Ejercicio 4
const printNumbers = numeros => {
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] % 2 === 0 ? 'És parell' : 'És imparell')
  }
}

console.log("Ej 4:")
parOImpar([1, 2, 3])
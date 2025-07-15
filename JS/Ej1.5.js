//Ejercicio 1
const numsMap = [1, 2, 3, 4]
const quadrat = numsMap.map(n => n ** 2)

console.log("Ej 1:", quadrat)

//Ejercicio 2
const numsFilter = [1, 2, 3, 4]
const parells = numsFilter.filter(n => n % 2 === 0)

console.log("Ej 2: ", parells)

//Ejercicio 3
const numsFind = [1, 10, 8, 11]
const primerElement = numsFind.find(n => n > 10)

console.log("Ej 3:", primerElement)

//Ejercicio 4
const numsReduce = [13, 7, 8, 21]
const suma = numsReduce.reduce((acc, val) => acc + val, 0)

console.log("Ej 4:", suma)

//Ejercicio 5
const nums = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
const sumaNums = nums.filter(n => n >= 10).map(n => n * 2).reduce((acc, val) => acc + val, 0)

console.log("Ej 5:", sumaNums)

//Ejercicio 6
const array = [11, 12, 13, 14]

const totsMajorsQue10 = array.every(n => n > 10)
const algunsMajorsQue10 = array.some(n => n > 10)

console.log("Ej 6 (Tots majors que 10):", totsMajorsQue10)
console.log("Ej 6 (Alguns majors que 10):", algunsMajorsQue10)
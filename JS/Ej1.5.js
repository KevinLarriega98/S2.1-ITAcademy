//Exercise 1
let numbersMap = [1, 2, 3, 4]
let squares = numbersMap.map(n => n ** 2)

console.log("Exercise 1:", squares)

//Exercise 2
let numbersFilter = [1, 2, 3, 4]
let evenNumbers = numbersFilter.filter(n => n % 2 === 0)

console.log("Exercise 2: ", evenNumbers)

//Exercise 3
let numbersFind = [1, 10, 8, 11]
let firstGreaterThanTen = numbersFind.find(n => n > 10)

console.log("Exercise 3:", firstGreaterThanTen)

//Exercise 4
let numbersReduce = [13, 7, 8, 21]
let totalSum = numbersReduce.reduce((acc, val) => acc + val, 0)

console.log("Exercise 4:", totalSum)

//Exercise 5
let numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
let processedSum = numbers.filter(n => n >= 10).map(n => n * 2).reduce((acc, val) => acc + val, 0)

console.log("Exercise 5:", processedSum)

//Exercise 6
let array = [11, 12, 13, 14]

let allGreaterThanTen = array.every(n => n > 10)
let someGreaterThanTen = array.some(n => n > 10)

console.log("Exercise 6 (All greater than 10):", allGreaterThanTen)
console.log("Exercise 6 (Some greater than 10):", someGreaterThanTen)
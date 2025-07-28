//Exercise 1
const numbersMap = [1, 2, 3, 4]
const squares = numbersMap.map(n => n ** 2)

console.log("Exercise 1:", squares)

//Exercise 2
const numbersFilter = [1, 2, 3, 4]
const evenNumbers = numbersFilter.filter(n => n % 2 === 0)

console.log("Exercise 2: ", evenNumbers)

//Exercise 3
const numbersFind = [1, 10, 8, 11]
const firstGreaterThanTen = numbersFind.find(n => n > 10)

console.log("Exercise 3:", firstGreaterThanTen)

//Exercise 4
const numbersReduce = [13, 7, 8, 21]
const totalSum = numbersReduce.reduce((acc, val) => acc + val, 0)

console.log("Exercise 4:", totalSum)

//Exercise 5
const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
const processedSum = numbers.filter(n => n >= 10).map(n => n * 2).reduce((acc, val) => acc + val, 0)

console.log("Exercise 5:", processedSum)

//Exercise 6
const array = [11, 12, 13, 14]

const allGreaterThanTen = array.every(n => n > 10)
const someGreaterThanTen = array.some(n => n > 10)

console.log("Exercise 6 (All greater than 10):", allGreaterThanTen)
console.log("Exercise 6 (Some greater than 10):", someGreaterThanTen)
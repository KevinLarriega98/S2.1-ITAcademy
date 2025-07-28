//Exercise 1
const canDrive = (age) => age >= 18 ? 'Can drive' : 'Cannot drive'

console.log("Exercise 1:", canDrive(18))
console.log("Exercise 1:", canDrive(17))

//Exercise 2
const biggerNumber = (num1, num2) => num1 > num2 ? 'num1 is bigger' : 'num2 is bigger'

console.log("Exercise 2", biggerNumber(10, 5))
console.log("Exercise 2", biggerNumber(10, 50))

//Exercise 3
const numberType = num =>
  num > 0 ? 'Positive' :
  num < 0 ? 'Negative' :
    'Zero'

console.log("Exercise 3.1:", numberType(1))
console.log("Exercise 3.1:", numberType(-1))
console.log("Exercise 3.1:", numberType(0))

const findMax = (a, b, c) =>
  a > b
    ? (a > c ? a : c)
    : (b > c ? b : c)

console.log("Exercise 3.2 (a):", findMax(50, 10, 3))
console.log("Exercise 3.2 (b):", findMax(50, 100, 3))
console.log("Exercise 3.2 (c):", findMax(50, 10, 300))

//Exercise 4
const evenOrOdd = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] % 2 === 0 ? 'Even' : 'Odd')
  }
}

console.log("Exercise 4:")
evenOrOdd([1, 2, 3])
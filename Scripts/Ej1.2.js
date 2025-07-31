//Exercise 1
const canDrive = (age) => {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number")
  }

  return age >= 18 ? "Can drive" : "Cannot drive"
}

try {
  console.log("Exercise 1:", canDrive(18))
  console.log("Exercise 1:", canDrive("18"))
} catch (error) {
  console.error("Exercise 1 - Error:", error.message)
}

//Exercise 2
const biggerNumber = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new TypeError("Both arguments must be numbers")
  }

  return num1 > num2 ? 'num1 is bigger' : 'num2 is bigger'
}

try {
  console.log("Exercise 2:", biggerNumber(10, 5))
  console.log("Exercise 2:", biggerNumber("number", 50))
} catch (error) {
  console.error("Exercise 2 - Error:", error.message)
}

//Exercise 3
const numberType = num => {
  if (typeof num !== 'number') {
    throw new TypeError("Argument must be a number")
  }

  return num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero'
}

try {
  console.log("Exercise 3.1:", numberType(1))
  console.log("Exercise 3.1:", numberType(-1))
  console.log("Exercise 3.1:", numberType(0))
  console.log("Exercise 3.1:", numberType("hi"))
} catch (error) {
  console.error("Exercise 3.1 - Error:", error.message)
}

const findMax = (a, b, c) => {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number'
  ) {
    throw new TypeError("All arguments must be numbers")
  }

  return a > b ? (a > c ? a : c) : (b > c ? b : c)
}

try {
  console.log("Exercise 3.2 (a):", findMax(50, 10, 3))
  console.log("Exercise 3.2 (b):", findMax(50, 100, 3))
  console.log("Exercise 3.2 (c):", findMax(50, 10, 300))
  console.log("Exercise 3.2 (d):", findMax(50, "hello", 3))
} catch (error) {
  console.error("Exercise 3.2 - Error:", error.message)
}

//Exercise 4
const evenOrOdd = numbers => {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an array")
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError(`Element at index ${i} is not a number`)
    }

    console.log(numbers[i] % 2 === 0 ? 'Even' : 'Odd')
  }
}

try {
  console.log("Exercise 4:")
  evenOrOdd([1, 2, 3])
  evenOrOdd(["1", true, 3])
} catch (error) {
  console.error("Exercise 4 - Error:", error.message)
}
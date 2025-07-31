//Exercise 1
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Both arguments must be numbers")
  }
  
  return a + b
}

try {
  console.log("Exercise 1:", add(1, 4))
  console.log("Exercise 1:", add(1))
} catch (error) {
  console.error("Exercise 1 - Error:", error.message)
}

//Exercise 2
const randomNumber = () => Math.floor(Math.random() * 101)

console.log("Exercise 2:", randomNumber())

//Exercise 3
class Person {
  constructor(name) {
    this.name = name
  }

  greet = () => {
    console.log(`Exercise 3: Hello, ${this.name}`)
  }
}

const person = new Person("Kevin")
person.greet()

//Exercise 4
const printNumbers = numbers => {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an array")
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError(`Element at index ${i} is not a number`)
    }

    console.log(numbers[i])
  }
}

try {
  console.log("Exercise 4:")
  printNumbers([10, 20, 30])
  printNumbers(["10", true, 30])
} catch (error) {
  console.error("Exercise 4 - Error:", error.message)
}

//Exercise 5
const delayedMessage = () => {
  setTimeout(() => {
    console.log("Exercise 5: This message will appear after 3 seconds")
  }, 3000)
}

delayedMessage()
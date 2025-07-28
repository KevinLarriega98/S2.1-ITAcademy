//Exercise 1
const add = (a, b) => {
  return a + b
}

console.log("Exercise 1:", add(1, 4))

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
  for (let i = 0; i < numbers.length; i++) {
    const print = () => {
      console.log(numbers[i])
    }

    print()
  }
}

console.log("Exercise 4:")
printNumbers([10, 20, 30])

//Exercise 5
const delayedMessage = () => {
  setTimeout(() => {
    console.log("Exercise 5: This message will appear after 3 seconds")
  }, 3000)
}

delayedMessage()
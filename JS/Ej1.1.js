//Ejercicio 1
const add = (a, b) => {
  return a + b
}

console.log("Ej 1:", add(1, 4))

//Ejercicio 2
const randomNumber = () => Math.floor(Math.random() * 101)

console.log("Ej 2:", randomNumber())

//Ejercicio 3
class Person {
  constructor(name) {
    this.name = name
  }

  greet = () => {
    console.log(`Ej 3: Hola, ${this.name}`)
  }
}

const persona = new Person("Kevin")
persona.greet()

//Ejercicio 4
const printNumbers = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    const print = () => {
      console.log(numbers[i])
    }

    print()
  }
}

console.log("Ej 4:")
printNumbers([10, 20, 30])

//Ejercicio 5
const delayedMessage = () => {
  setTimeout(() => {
    console.log("Ej 5: Este es un mensaje que aparecerá después de 3 segundos");
  }, 3000)
}

delayedMessage()
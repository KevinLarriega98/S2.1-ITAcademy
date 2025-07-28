//Exercise 1
const process = (num, callback) => {
    callback(num)
}

const showDouble = num => {
    console.log("Exercise 1:", num * 2)
}

process(5, showDouble)

//Exercise 2
const calculator = (num1, num2, callback) => {
    callback(num1, num2)
}

const sumNumbers = (num1, num2) => {
    console.log("Exercise 2:", num1 + num2)
}

calculator(1, 4, sumNumbers)

//Exercise 3
const waitAndGreet = (name, callback) => {
    setTimeout(() => {
        callback(name)
    }, 2000)
}

const greet = name => {
    console.log("Exercise 3:", `Hello, ${name}`)
}

waitAndGreet("Kevin", greet)

//Exercise 4
const processElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const iterateArray = array => {
    console.log(array)
}

console.log("Exercise 4:")
processElements([1, 2, 3], iterateArray)

//Exercise 5
const processString = (string, callback) => {
    callback(string.toUpperCase())
}

const transformedString = string => {
    console.log("Exercise 5:", string)
}

processString("kevin", transformedString)
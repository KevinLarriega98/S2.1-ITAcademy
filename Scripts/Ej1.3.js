//Exercise 1
const process = (num, callback) => {
    if (typeof num !== 'number') {
        throw new TypeError("First argument must be a number")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Second argument must be a function")
    }

    callback(num)
}

const showDouble = num => {
    console.log("Exercise 1:", num * 2)
}

try {
    process(5, showDouble)
    process("5", showDouble)
    process(5, "not a function")
} catch (error) {
    console.error("Exercise 1 - Error:", error.message)
}

//Exercise 2
const calculator = (num1, num2, callback) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError("Both arguments must be numbers")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Third argument must be a function")
    }

    callback(num1, num2)
}

const sumNumbers = (num1, num2) => {
    console.log("Exercise 2:", num1 + num2)
}

try {
    calculator(1, 4, sumNumbers)
    calculator("1", 4, sumNumbers)
    calculator(1, 4, "not a function")
} catch (error) {
    console.error("Exercise 2 - Error:", error.message)
}

//Exercise 3
const waitAndGreet = (name, callback) => {
    if (typeof callback !== 'function') {
        throw new TypeError("Second argument must be a function")
    }

    setTimeout(() => {
        callback(name)
    }, 2000)
}

const greet = name => {
    console.log("Exercise 3:", `Hello, ${name}`)
}

try {
    waitAndGreet("Kevin", greet)
    waitAndGreet("Kevin", "not a function")
} catch (error) {
    console.error("Exercise 3 - Error:", error.message)
}

//Exercise 4
const processElements = (array, callback) => {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Second argument must be a function")
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const iterateArray = element => {
    console.log(element)
}

try {
    console.log("Exercise 4:")
    processElements([1, 2, 3], iterateArray)
    processElements("not an array", iterateArray)
    processElements([1, 2, 3], "not a function")
} catch (error) {
    console.error("Exercise 4 - Error:", error.message)
}

//Exercise 5
const processString = (string, callback) => {
    if (typeof string !== 'string') {
        throw new TypeError("First argument must be a string")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Second argument must be a function")
    }

    callback(string.toUpperCase())
}

const transformedString = string => {
    console.log("Exercise 5:", string)
}

try {
    processString("kevin", transformedString)
    processString(27, transformedString)
    processString("kevin", "not a function")
} catch (error) {
    console.error("Exercise 5 - Error:", error.message)
}
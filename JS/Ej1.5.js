//Exercise 1
const squareNumbers = numbers => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    return numbers.map(n => n ** 2)
}

try {
    let numbersMap = [1, 2, 3, 4]
    let squares = squareNumbers(numbersMap)
    //let squares = squareNumbers([1, "a", 3])

    console.log("Exercise 1:", squares)
} catch (error) {
    console.error("Exercise 1 - Error:", error.message)
}

//Exercise 2
const evenNumbers = numbers => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    return numbers.filter(n => n % 2 === 0)
}

try {
    let numbersFilter = [1, 2, 3, 4]
    let even = evenNumbers(numbersFilter)
    //let even = evenNumbers([1, "a", 3])

    console.log("Exercise 2:", even)
} catch (error) {
    console.error("Exercise 2 - Error:", error.message)
}

//Exercise 3
const greaterThanTenNumbers = numbers => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    return numbers.find(n => n > 10)
}

try {
    let numbersFind = [1, 10, 8, 11]
    let firstGreaterThanTen = greaterThanTenNumbers(numbersFind)
    //let firstGreaterThanTen = greaterThanTenNumbers([1, 10, "a", 11])

    console.log("Exercise 3:", firstGreaterThanTen)
} catch (error) {
    console.error("Exercise 3 - Error:", error.message)
}

//Exercise 4
const sumNumbers = numbers => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    return numbers.reduce((acc, val) => acc + val, 0)
}

try {
    let numbersReduce = [13, 7, 8, 21]
    let totalSum = sumNumbers(numbersReduce)
    //let totalSum = sumNumbers([13, 7, "a", 21])

    console.log("Exercise 4:", totalSum)
} catch (error) {
    console.error("Exercise 4 - Error:", error.message)
}

//Exercise 5
const processedSumNumbers = numbers => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    return numbers.filter(n => n >= 10).map(n => n * 2).reduce((acc, val) => acc + val, 0)
}

try {
    let numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
    let processedSum = processedSumNumbers(numbers)
    //let processedSum = processedSumNumbers([1, 3, 7, "a", 15, 17, 11, true, 8, 12, 9])

    console.log("Exercise 5:", processedSum)
} catch (error) {
    console.error("Exercise 5 - Error:", error.message)
}

//Exercise 6
const checkGreaterThanTen = array => {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array")
    }

    if (!array.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    const allGreaterThanTen = array.every(n => n > 10)
    const someGreaterThanTen = array.some(n => n > 10)

    return { allGreaterThanTen, someGreaterThanTen }
}

try {
    let array = [11, 12, 13, 14]
    let result = checkGreaterThanTen(array)
    //let result = checkGreaterThanTen([11, 12, "a", 14])

    console.log("Exercise 6 (All greater than 10):", result.allGreaterThanTen)
    console.log("Exercise 6 (Some greater than 10):", result.someGreaterThanTen)
} catch (error) {
    console.error("Exercise 6 - Error:", error.message)
}
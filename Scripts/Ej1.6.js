let names = ['Anna', 'Bernat', 'Clara']
let numbers = [1, 2, 3, 4, 5, 6]

let faultyNames = ['Anna', 42, 'Clara']

//Exercise 1
const printNamesForEach = names => {
    if (!Array.isArray(names)) {
        throw new TypeError("Input must be an array")
    }

    if (!names.every(n => typeof n === 'string')) {
        throw new TypeError("All elements in the array must be strings")
    }

    return names.forEach((name) => console.log(name))
}

try {
    console.log("Exercise 1:")
    printNamesForEach(names)
    printNamesForEach(faultyNames)
} catch (error) {
    console.error("Exercise 1 - Error:", error.message)
}

//Exercise 2
const printNamesForOf = names => {
    if (!Array.isArray(names)) {
        throw new TypeError("Input must be an array")
    }

    if (!names.every(n => typeof n === 'string')) {
        throw new TypeError("All elements in the array must be strings")
    }

    for (let name of names) {
        console.log(name)
    }
}

try {
    console.log("Exercise 2:")
    printNamesForOf(names)
    printNamesForOf(faultyNames)
} catch (error) {
    console.error("Exercise 2 - Error:", error.message)
}

//Exercise 3
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
    //let faultyEvenNumbers = [1, 2, "a", 4, 5, true]

    let even = evenNumbers(numbers)
    //let even = evenNumbers(faultyEvenNumbers)

    console.log("Exercise 3:", even)
} catch (error) {
    console.error("Exercise 3 - Error:", error.message)
}

//Exercise 4
const printPersonProperties = (person) => {
    if (typeof person !== 'object' || person === null || Array.isArray(person)) {
        throw new TypeError("Input must be a non-null object")
    }

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}

try {
    let person = {
        name: 'Ona',
        age: 25,
        city: 'Barcelona'
    }

    console.log("Exercise 4:")
    printPersonProperties(person)
    // printPersonProperties(null)
    // printPersonProperties(['name', 'age'])
} catch (error) {
    console.error("Exercise 4 - Error:", error.message)
}

//Exercise 5
const printUntilFive = numbers => {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array")
    }

    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All elements in the array must be numbers")
    }

    for (let number of numbers) {
        console.log(number)
        if (number === 5) {
            break
        }
    }
}

try {
    console.log("Exercise 5:")
    printUntilFive(numbers)

    let faultyNumbers = [1, "2", 3]
    printUntilFive(faultyNumbers)
} catch (error) {
    console.error("Exercise 5 - Error:", error.message)
}

//Exercise 6
const printNamesWithIndex = names => {
    if (!Array.isArray(names)) {
        throw new TypeError("Input must be an array")
    }

    if (!names.every(n => typeof n === 'string')) {
        throw new TypeError("All elements in the array must be strings")
    }

    for (let [index, name] of names.entries()) {
        console.log(index, name)
    }
}

try {
    console.log("Exercise 6:")
    printNamesWithIndex(names)
    printNamesWithIndex(faultyNames)
} catch (error) {
    console.error("Exercise 6 - Error:", error.message)
}
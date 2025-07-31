//Exercise 1
const mergeArrays = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Both arguments must be arrays")
    }

    return [...arr1, ...arr2]
}

try {
    let array1 = [10, 20, 30]
    let array2 = [40, 50, 60]

    let array3 = mergeArrays(array1, array2)
    //let array3 = mergeArrays("not an array", [1, 2])
    console.log("Exercise 1:", array3)
} catch (error) {
    console.error("Exercise 1 - Error:", error.message)
}

//Exercise 2
const sum = (...numbers) => {
    if (!numbers.every(n => typeof n === 'number')) {
        throw new TypeError("All arguments must be numbers")
    }

    return numbers.reduce((acc, num) => acc + num, 0)
}

try {
    console.log("Exercise 2:", sum(1, 2, 3, 4, 5))
    console.log("Exercise 2:", sum(1, "2", 3))
} catch (error) {
    console.error("Exercise 2 - Error:", error.message)
}

//Exercise 3
const copyPerson = (person) => {
    if (typeof person !== 'object' || person === null || Array.isArray(person)) {
        throw new TypeError("Input must be a non-null object")
    }

    const copied = { ...person }
    copied.name = "André"
    return copied
}

try {
    let originalPerson = {
        name: "Kevin",
        age: 27
    }

    let copiedPerson = copyPerson(originalPerson)
    //let copiedPerson = copyPerson(null)
    //let copiedPerson = copyPerson("Kevin")
    //let copiedPerson = copyPerson(["name", "Kevin"])

    console.log("Exercise 3 - Original person", originalPerson)
    console.log("Exercise 3 - Copied person", copiedPerson)
} catch (error) {
    console.error("Exercise 3 - Error:", error.message)
}

//Exercise 4
const processArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("Argument must be an array")
    }

    let [name, age, ...rest] = arr

    console.log(name)
    console.log(age)
    console.log(rest)
}

try {
    console.log("Exercise 4:")
    processArray(["Kevin", 27, true])
    processArray("Not an array")
} catch (error) {
    console.error("Exercise 4 - Error:", error.message)
}

//Exercise 5
const showThree = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
}

const safeShowThree = (array) => {
    if (!Array.isArray(array)) {
        throw new TypeError("Argument must be an array")
    }
    if (array.length < 3) {
        throw new Error("Array must have at least 3 elements")
    }

    showThree(...array)
}

try {
    console.log("Exercise 5:")
    safeShowThree([10, 20, 30])
    safeShowThree("Not an array")
    safeShowThree([10])
} catch (error) {
    console.error("Exercise 5 - Error:", error.message)
}

//Exercise 6
const mergeObjects = (obj1, obj2) => {
    if (
        typeof obj1 !== 'object' || obj1 === null || Array.isArray(obj1) ||
        typeof obj2 !== 'object' || obj2 === null || Array.isArray(obj2)
    ) {
        throw new TypeError("Both arguments must be non-null plain objects")
    }

    return { ...obj1, ...obj2 }
}

try {
    let person = { name: "Kevin", lastName: "Larriega" }
    let additionalData = { age: 27, genre: "Male" }

    let fullPerson = mergeObjects(person, additionalData)
    //let fullPerson = mergeObjects(null, additionalData)
    //let fullPerson = mergeObjects(["not", "an", "object"], additionalData)
    console.log("Exercise 6:", fullPerson)
} catch (error) {
    console.error("Exercise 6 - Error:", error.message)
}
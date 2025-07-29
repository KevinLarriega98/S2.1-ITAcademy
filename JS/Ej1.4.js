//Exercise 1
let array1 = [10, 20, 30]
let array2 = [40, 50, 60]

let array3 = [...array1, ...array2]

console.log("Exercise 1:", array3)

//Exercise 2
const sum = (...numbers) => {
    return numbers.reduce((acum, num) => acum + num, 0)
}

console.log("Exercise 2:", sum(1, 2, 3, 4, 5))

//Exercise 3
let originalPerson = {
    name: "Kevin",
    age: 27
}

let copiedPerson = {...originalPerson}
copiedPerson.name = "André"

console.log("Exercise 3 - Original person", originalPerson)
console.log("Exercise 3 - Copied person", copiedPerson)

//Exercise 4
let myArray = ["Kevin", 27, true]

let [name, age, ...rest] = myArray

console.log("Exercise 4:")
console.log(name)
console.log(age)
console.log(rest)

//Exercise 5
const showThree = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
}

let threeElementArray = [10, 20, 30]

console.log("Exercise 5:")
showThree(...threeElementArray)

//Exercise 6
let person = {
    name: "Kevin",
    lastName: "Larriega"
}

let additionalData = {
    age: 27,
    genre: "Male"
}

let fullPerson = {...person, ...additionalData}

console.log("Exercise 6:", fullPerson)
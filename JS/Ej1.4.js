//Exercise 1
const array1 = [10, 20, 30]
const array2 = [40, 50, 60]

const array3 = [...array1, ...array2]

console.log("Exercise 1:", array3)

//Exercise 2
const sum = (...numbers) => {
    return numbers.reduce((acum, num) => acum + num, 0)
}

console.log("Exercise 2:", sum(1, 2, 3, 4, 5))

//Exercise 3
const originalPerson = {
    name: "Kevin",
    age: 27
}

const copiedPerson = {...originalPerson}
copiedPerson.name = "André"

console.log("Exercise 3 - Original person", originalPerson)
console.log("Exercise 3 - Copied person", copiedPerson)

//Exercise 4
const myArray = ["Kevin", 27, true]

const [name, age, ...rest] = myArray

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

const threeElementArray = [10, 20, 30]

console.log("Exercise 5:")
showThree(...threeElementArray)

//Exercise 6
const person = {
    name: "Kevin",
    lastName: "Larriega"
}

const additionalData = {
    age: 27,
    genre: "Male"
}

const fullPerson = {...person, ...additionalData}

console.log("Exercise 6:", fullPerson)
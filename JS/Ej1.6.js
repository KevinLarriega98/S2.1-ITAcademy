let names = ['Anna', 'Bernat', 'Clara']
let numbers = [1, 2, 3, 4, 5, 6]

//Exercise 1
console.log("Exercise 1:")
names.forEach((name) => console.log(name))

//Exercise 2
console.log("Exercise 2:")
for (const name of names) {
    console.log(name)
}

//Exercise 3
const evenNumbers = numbers.filter(n => n % 2 === 0)

console.log("Exercise 3: ", evenNumbers)

//Exercise 4
let person = {
    name: 'Ona',
    age: 25,
    city: 'Barcelona'
}

console.log("Exercise 4:")
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

//Exercise 5
console.log("Exercise 5:")
for (const number of numbers) {
    console.log(number)
    if (number === 5) {
        break
    }
}

//Exercise 6
console.log("Exercise 6:")
for (const [index, name] of names.entries()) {
    console.log(index, name)
}
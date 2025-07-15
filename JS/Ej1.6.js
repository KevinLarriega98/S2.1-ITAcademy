let noms = ['Anna', 'Bernat', 'Clara']
let numeros = [1, 2, 3, 4, 5, 6]

//Ejercicio 1
console.log("Ej 1:")
noms.forEach((nom) => console.log(nom))

//Ejercicio 2
console.log("Ej 2:")
for (const nom of noms) {
    console.log(nom)
}

//Ejercicio 3
const parells = numeros.filter(n => n % 2 === 0)

console.log("Ej 3: ", parells)

//Ejercicio 4
let obj = {
    nom: 'Ona',
    edat: 25,
    ciutat: 'Barcelona'
}

console.log("Ej 4:")
for (const propietat in obj) {
    console.log(`${propietat}: ${obj[propietat]}`);
}

//Ejercicio 5
console.log("Ej 5:")
for (const numero of numeros) {
    console.log(numero)
    if (numero === 5) {
        break
    }
}

//Ejercicio 6
console.log("Ej 6:")
for (const [index, nom] of noms.entries()) {
    console.log(index, nom)
}
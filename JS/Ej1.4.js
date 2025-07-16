//Ejercicio 1
const array1 = [10, 20, 30]
const array2 = [40, 50, 60]

const array3 = [...array1, ...array2]

console.log("Ej 1:", array3)

//Ejercicio 2
const suma = (...numeros) => {
    return numeros.reduce((acum, num) => acum + num, 0)
}

console.log("Ej 2:", suma(1, 2, 3, 4, 5))

//Ejercicio 3
const objecte1 = {
    nombre: "Kevin",
    edad: 27
}

const objecte2 = {...objecte1}
objecte2.nombre = "André"

console.log("Ej 3 - Objecte 1", objecte1)
console.log("Ej 3 - Objecte 2", objecte2)

//Ejercicio 4
const myArray = ["Kevin", 27, true]

const [nombre, edad, ...resto] = myArray

console.log("Ej 4:")
console.log(nombre)
console.log(edad)
console.log(resto)

//Ejercicio 5
const mostrarTres = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
}

const arrayTresElementos = [10, 20, 30]

console.log("Ej 5:")
mostrarTres(...arrayTresElementos)

//Ejercicio 6
const obj1 = {
    nombre: "Kevin",
    apellido: "Larriega"
}

const obj2 = {
    edad: 27,
    genero: "Masculino"
}

const obj3 = {...obj1, ...obj2}

console.log("Ej 6:", obj3)
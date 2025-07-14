//Ejercicio 1
const processar = (num, callback) => {
    callback(num)
}

const mostrarDoble = num => {
    console.log("Ej 1:", num * 2)
}

processar(5, mostrarDoble)

//Ejercicio 2
const calculadora = (num1, num2, callback) => {
    callback(num1, num2)
}

const sumaNumeros = (num1, num2) => {
    console.log("Ej 2:", num1 + num2)
}

calculadora(1, 4, sumaNumeros)

//Ejercicio 3
const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom)
    }, 2000)
}

const saludar = nom => {
    console.log("Ej 3:", `Hola, ${nom}`)
}

esperarISaludar("Kevin", saludar)

//Ejercicio 4
const processarElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const iterarArray = array => {
    console.log(array)
}

console.log("Ej 4:")
processarElements([1, 2, 3], iterarArray)

//Ejercicio 5
const processarCadena = (cadena, callback) => {
    callback(cadena.toUpperCase())
}

const cadenaTransformada = cadena => {
    console.log("Ej 5:", cadena)
}

processarCadena("kevin", cadenaTransformada)
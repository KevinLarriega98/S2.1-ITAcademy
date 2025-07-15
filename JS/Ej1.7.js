//Ejercicio 1
const esperarSaludo = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hola, món"), 2000)
    })
}

//Ejercicio 2
esperarSaludo().then(mensaje => {
    console.log("Ej 2:", mensaje)
})

//Ejercicio 3
const saludo = (texto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (texto === 'Hola') {
                resolve(texto)
            } else {
                reject("Esto no es un saludo")
            }
        }, 2000)
    })
}

saludo('Hola')
    .then(mensaje => {
        console.log("Ej 3:", mensaje)
    })
    .catch(error => {
        console.error("Ej 3 - Error:", error)
    })

//Ejercicio 4
async function mostrarSaludoAsync() {
    const mensaje = await esperarSaludo()
    console.log("Ej 4:", mensaje)
}

mostrarSaludoAsync()

//Ejercicio 5
async function mostrarSaludoAsyncTryCatch() {
    try {
        const mensaje = await esperarSaludo()
        console.log("Ej 5:", mensaje)
    } catch (error) {
        console.error("Ej 5 - Error:", error.message)
    }
}

mostrarSaludoAsyncTryCatch()

//Ejercicio 6
const promesa1 = new Promise(resolve => {
    setTimeout(() => resolve("Promesa 1 dice hola"), 2000)
})

const promesa2 = new Promise(resolve => {
    setTimeout(() => resolve("Promesa 2 dice adiós"), 3000)
})

Promise.all([promesa1, promesa2])
    .then(res => {
        console.log("Ej 6:", res)
    })
    .catch(error => {
        console.error("Ej 6 - Error:", error)
    })
//Exercise 1
const waitForGreeting = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello, world"), 2000)
    })
}

//Exercise 2
waitForGreeting().then(message => {
    console.log("Exercise 2:", message)
})

//Exercise 3
const greeting = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text === 'Hello') {
                resolve(text)
            } else {
                reject("This is not a valid greeting")
            }
        }, 2000)
    })
}

greeting('Hello')
    .then(message => {
        console.log("Exercise 3:", message)
    })
    .catch(error => {
        console.error("Exercise 3 - Error:", error)
    })

//Exercise 4
async function mostrargreetingAsync() {
    const message = await waitForGreeting()
    console.log("Exercise 4:", message)
}

mostrargreetingAsync()

//Exercise 5
async function showGreetingAsyncTryCatch() {
    try {
        const message = await waitForGreeting()
        console.log("Exercise 5:", message)
    } catch (error) {
        console.error("Exercise 5 - Error:", error.message)
    }
}

showGreetingAsyncTryCatch()

//Exercise 6
const promise1 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 1 says Hello"), 2000)
})

const promise2 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 2 says adiós"), 3000)
})

Promise.all([promise1, promise2])
    .then(res => {
        console.log("Exercise 6:", res)
    })
    .catch(error => {
        console.error("Exercise 6 - Error:", error)
    })
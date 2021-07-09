// Event  Loop

const timeout = setTimeout(() => {
    console.log('After timeout')
}, 2500)

clearTimeout(timeout)                     // stop timeout


const interval = setInterval(() => {
    console.log('After interval')
}, 1000)

/////////////////////////////////////////////////////

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay(() => {
    console.log('After delay')
}, 2000)


const delay2 = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
    }, wait)
    })
    return promise
}


delay(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Finally'))


































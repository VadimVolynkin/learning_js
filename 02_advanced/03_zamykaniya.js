function createCalcFunction (n) {
    return function() {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)
calc()

//////////////////////////////////////////////

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
console.log(addOne(10))

//////////////////////////////////////////////

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com')
console.log(comUrl('google'))

//////////////////////////////////////////////
// function bind(context, fn) {                              // context = person, fn = logPerson
//     return function() {                           
//         fn.apply(context)
//     }
// }


function bind(context, fn) {                              // context = person, fn = logPerson
    return fn.apply(context)
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'vadim', age:34, job: 'programmer'}
const person2 = {name: 'lena', age:22, job: 'smm'}

bind(person1, logPerson)()
bind(person2, logPerson)()


























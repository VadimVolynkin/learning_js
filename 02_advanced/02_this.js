
function hello() {
    console.log('Hello', this)
}


const person = {
    name: 'vadim',
    age: 34,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),             // add context window
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`This name is ${this.name}`)
        console.log(`This age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 24
}


// const fnLenaInfoLog = person.logInfo.bind(lena)
// person.logInfo.bind(lena, 'programmer', '823922392329')()
// person.logInfo.call(lena, 'programmer', '823922392329')
person.logInfo.apply(lena, ['programmer', '823922392329'])
// fnLenaInfoLog('programmer', '823922392329')
// person.logInfo.bind(lena)()

/////////////////////////////////////////////////////////

const array = [1, 2, 3 ,4 ,5]


function multBy(arr, n) {
    return arr.map(function(i) {
        return i * n
    })
}

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(2))




















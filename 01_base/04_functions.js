// // Function Declaration             можно вызывать в любом месте (можнодо создания )
// function greet(name) {
//     console.log('Hi - ', name)
// }

// // Function Declaration             можно вызывать только после создания функции
// const greet2 = function greet2(name) {
//     console.log('Hi 2 - ', name)
// }

// console.dir(greet)



// Function Anonymous 
// let counter = 0
// setInterval(function() {
//     console.log(++counter)
// }, 1000)



// Function Arrows 
function greet(name) {
    console.log('Hi - ', name)
}

const arrow = (name) => {
    console.log('Hi - ', name)    
}

const arrow2 = name => console.log('Hi - ', name)
arrow2('Vadim')

const pow = num => num ** 2
console.log(pow(5))

// параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b
console.log(sum())

// неопределенное кол-во параметров
function sumAll(...all) {
    console.log(all)
    let result = 0
    for (let num of all) {
        result += num
    }
    return console.log(result)
}
sumAll(1, 2, 3, 4, 5)

// Замыкание (возврат функции)
function createMember(firstName) {
    return function(lastName) {
        console.log(firstName + lastName)
    }
}
const logWithLastName = createMember('Vadim')
console.log(logWithLastName('Ivanov'))           // take second param = lastName , firstName - private variable  
console.log(logWithLastName('Petrov'))
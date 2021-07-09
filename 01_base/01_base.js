// https://www.youtube.com/watch?v=Bluxbh9CaQ0

// 8 types: string, number, boolean, undefined, null, BigInt, float ...

// var name = 'Vadim'  // устаревший вариант переменных
// name = 'Ivan'       // var можно изменить

// const lastName = 'Volynkin'  // const нельзя переопределить
// let age = 34                 // можно переопределить
// isProgrammer = true


// Increment
// let currentYear = 2020
// console.log(currentYear++)  // 2020  next 2021
// console.log(++currentYear)  // 2021


// Data Types
// isProgrammer = true
// console.log(typeof isProgrammer)   // boolean
// let bignum = 3545454564n           // bigint


// //
// const courseStatus = 'pending'

// if (courseStatus === 'ready') {
//     console.log('ready')
// } else if (courseStatus === 'pending') {
//     console.log('pending')
// } else {
//     console.log('nothing')
// }

/////////////////////////////////////////////////////////

// const num1 = 42
// const num2 = '42'

// console.log(num1 == num2)  // true   check without type
// console.log(num1 === num2) // false  check with type --- this better

// /////////////////////////////////////////////////////////
// const isReady = true
// if (isReady) {
//     console.log('ready')
// } else {
//     console.log('not ready')
// }
// // Ternarnye vyrazheniya 
// isReady ? console.log('ready') : console.log('not ready')

/////////////////////////////////////////////////////////

// function calculateAge(year) {
//     return 2020 - year
// }
// console.log(calculateAge(1986))

// // Massives

// const cars1 = ['audi', 'bmw', 'mersedes']
// const cars2 = new Array('audi', 'bmw', 'mersedes') // this method not uses
// console.log(cars1[1])
// console.log(cars1.length)


// cars1[0] = 'mazda'
// cars1[cars1.length] = 'opel'  // add in the end



// for (let i = 0; i < cars1.length; i++) {
//     console.log(cars1[i])
// }

// for (let car of cars1) {
//     console.log(car)
// }

// Objects
const person = {
    firstName: 'Vadim',
    lastName: 'Volynkin',
    year: 1986,
    languages: ['russian', 'english'],
    greet: function() {                 // it`s object`s method (function in object)
        console.log('greet')
    }
}
console.log(person.firstName)



























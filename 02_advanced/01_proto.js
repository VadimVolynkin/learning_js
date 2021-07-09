
// https://www.youtube.com/watch?v=cS6nTVNzOPw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=6


const person = {
    name: 'vadim',
    age: 34,
    greet() {
        console.log('Greet')
    }
}

const person2 = new Object({                          // Object - main parent class in JS
    name: 'vadim',
    age: 34,
    greet() {
        console.log('Greet')
    }
})

Object.prototype.sayHello = function() {              // add a new custom method to Object prototype
    console.log('Hello')
}

const lena = Object.create(person)
lena.name = 'Elena'












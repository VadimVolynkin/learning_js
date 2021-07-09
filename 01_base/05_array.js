const cars = ['bmw', 'mersedes', 'audi', 'ford']
const fib  = [1, 1, 2, 5, 8, 13]
const people = [
    {name: 'vadim', budget: 4000},
    {name: 'victor', budget: 7200},
    {name: 'pavel', budget: 1700},
]

/////////////////////////////////////////////////////

cars.push('reno')       // add in the end
cars.pop()              // delete last item and return item

cars.unshift('lada')    // add in the beginning
cars.shift()            // delete first item and return item

cars.reverse()          // reverse array
cars.reverse()
console.log(cars)

/////////////////////////////////////////////////////

const text = 'Hi, we are learning JavaScript'
const reversetext = text.split('').reverse().join('')


console.log(reversetext)

/////////////////////////////////////////////////////

const index = cars.indexOf('audi')
cars[index] = 'porsche'

console.log(cars)

/////////////////////////////////////////////////////

const indexPerson = people.findIndex(function(person) {           // create cycle with item person
    return person.budget === 1700
})
console.log(people[indexPerson].name)


const person1 = people.find(function(person) {                    // create cycle with item person
    return person.budget === 1700
})

const person2 = people.find(person => person.budget === 1700)     // lambda function
console.log(person1)

/////////////////////////////////////////////////////

cars.includes('bmw')               // true

const upperCaseCars = cars.map(car => car.toLocaleUpperCase())    // method map() create new array
console.log(upperCaseCars)


const pow2Fib = fib.map(f => f ** 2)
console.log(pow2Fib)


const filterNumbers = pow2Fib.filter(num => num > 20)
console.log(filterNumbers)

/////////////////////////////////////////////////////

const allBudjet = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudjet)

/////////////////////////////////////////////////////























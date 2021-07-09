const person = {
    name: 'Vadim',
    age: 34,
    isProgrammer: true,
    language: ['ru', 'en', 'de'],
    greet(){
        console.log('greet from person')
    },
    info() {
        console.log('My name is ', this.name)
    },
    'complex key': 'complex value',
}


console.log(person.name)
console.log(person['name'])
console.log(person['complex key'])
person.greet()
person.language.push('is')
// delete person['name']
// delete person.name
const {name, age: personAge, language} = person      // destructarisation   take age = personAge   
console.log(name, personAge, language)


for (let key in person) {                             // danger!!! for list proto
    if (person.hasOwnProperty(key)) {                 // check own
        console.log('key:', key)
        console.log('value:', person[key])
    }
}

///////////////////////////////////////////////////////////////////

const keys = Object.keys(person)
console.log(keys)





































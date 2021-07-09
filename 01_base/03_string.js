const name = 'Vadim'
const age = 34

function getAge(){
    return age
}

const output = `My name is ${name} and I am ${getAge()} years old.`

const output2 = `
<div>This is div</div>
<p>this is p tag</p>
`
console.log(output2)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))        // d
console.log(name.indexOf('im'))    // 3
console.log(name.indexOf('!'))     // -1   not this char
console.log(name.startsWith('V'))  // true
console.log(name.endsWith('V'))    // false
console.log(name.repeat(2))        // VadimVadim

const password = '     password      '
console.log(password.trim())       // password 
console.log(password.trimLeft())   // password      
console.log(password.trimRight())  //      password


function logPerson(s, name, age) {
    console.log(s, name, age)
    return `${s[0]} ${name}  ${s[1]} ${age}`
}
const personName = 'Vadim'
const personAge = 34

const output = logPerson`Name: ${personName}, Age: ${personAge}!`
console.log(output)





















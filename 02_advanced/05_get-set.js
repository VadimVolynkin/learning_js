

const person = Object.create(
  {
    calculateAge() {
      console.log('Age', new Date().getFullYear() - this.birthYear)
    }
  }, 
  {
    name: {
      value: 'vadim',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1986,
      enumerable: false,                // vision in console
      writable: false,                  // rewrite
      configurable: false,              // can delete
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear    // autorun
      },
      set(value) {
        console.log('Set age:', value)
      }
    }
    
})


person.name = 'Maxim'



for (let key in person){
  console.log(key, person[key])
}









































class Animal {
    static type = 'ANIMAL'
    constructor(options) {                 // constructor initialise base parameters
        this.name = options.name
        this.age = options.name
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am animal')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 34,
    hasTail: true
})


class Cat extends Animal{                 // child class
    static type = 'CAT'

    constructor(options) {
        super(options)                    // link to parent constructor
        this.color = options.color        // new field in child class

        
    }
    voice() {
        super.voice()                     // get parent method in child class
        console.log('I am cat')           // rewrite parent`s class method
    }
}              

const cat = new Cat({
    name: 'Cat',
    age: 4,
    hasTail: true,
    color: 'black'
})






///////////////////////////////////////////////////

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide () {
        this.$el.style.display = 'none'
        }
    show () {
        this.$el.style.display = 'block'
        }
}

class Box extends Component{
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})


class Circle extends Box{
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#box3',
    size: 100,
    color: 'green'
})











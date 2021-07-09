const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello')         // return 1 element - first
// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')



console.log(h2List[1])


console.log(heading)
console.dir(heading)
console.dir(heading.id)
console.dir(heading.textContent)

setTimeout(() => {
    addStylesTo(heading)
}, 2500)


function addStylesTo(node) {
    node.textContent = 'Changed Heading'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = '#000'
    node.style.padding = '2rem'
}


heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color ='red'
        heading.style.backgroundColor = '#000'
    }
}


heading2.addEventListener('dblclick', () => {
    heading2.onclick = () => {
        if (heading2.style.color === 'red') {
            heading2.style.color = '#000'
            heading2.style.backgroundColor = '#fff'
        } else {
            heading2.style.color ='red'
            heading2.style.backgroundColor = '#000'
        }
    }
})












































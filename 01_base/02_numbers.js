// const num = 42                      // integer
// const float = 43.43                 // float
// const pow = 10e3                    // 1000
// console.log(Number.NaN)             // not a number
// console.log(typeof NaN)             // number
// console.log(2 / 0)                  // infinity
// console.log(isFinite(Infinity))     // true
// console.log(isNaN(42))              // false

// const numString = '42'
// console.log(numString + 2)          // 422 string
// console.log(Number.parseInt(numString) + 2)    // 44 number
// console.log(Number(numString) + 2)  // 44 number
// console.log(+numString + 2)         // 44 number

// const floatString = '42.42'
// console.log(Number.parseFloat(floatString) + 2)      // 44.42 number
// console.log(parseFloat(floatString) + 2)             // 44.42 number
// console.log(+floatString + 2)                        // 44.42 number

// console.log(0.4 + 0.2)                         // 0.600...000001
// console.log(0.4 + 0.2).toFixed(4)              // 0.6000 string
// console.log(+(0.4 + 0.2).toFixed(4))           // 0.6000 number
// console.log(parseFloat(0.4 + 0.2).toFixed(4))  // 0.6000 number

// //////////////////////////////////////////////////////////

// console.log(10n - 4)                // error
// console.log(parseInt(10n) - 4)      // 6
// console.log(10n - BigInt(4))        // 6n
// console.log(5n / 2n)                // 2n


// //////////////////////////////////////////////////////////

// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))             // 5
// console.log(Math.pow(5, 2))            // 25
// console.log(Math.abs(-42))             // 42
// console.log(Math.max(42, 9, 34, 78))   // 78
// console.log(Math.min(42, 9, 34, 78))   // 9
// console.log(Math.floor(5.9))           // 5
// console.log(Math.ceil(5.9))            // 6
// console.log(Math.round(5.9))           // 6
// console.log(Math.trunc(5.9))           // 5   delete decimal part
// console.log(Math.random())             // 0.......decimal random


function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10,15))












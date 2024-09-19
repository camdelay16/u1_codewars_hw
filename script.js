// function makeNegative(num) {
//     if (num >= 0){
//         console.log (-num)
//     } else (console.log(num))} 
// makeNegative(-55)

// let numArray = [1, -4, 7, 12]
// function sumPositiveNum(numArray) {
//     let sum = 0
// for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] > 0) {console.log(sum += numArray[i])}
// }
// }
// sumPositiveNum(numArray)

// function squareNum(num) {
//     if (num > 0 || num < 0){console.log(num ** 2)}
// }
// squareNum(99)

// function reverseString(string) {
//     console.log(string.split('').reverse().join(''))
// }
// reverseString('one piece')
// // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/


// function sumNumbers(numArray) {
//     let sum = 0
//     if (numArray.length === 0) {
//         console.log(0)
//     } else for (i = 0; i < numArray.length; i++) {
//         if (typeof numArray[i] === "number") {
//             sum += numArray[i]
//         }
//     } console.log(sum)
// }

// sumNumbers([0, 9, -5, 6])

let numArray = [1, -4, 7, 12]
function sumPositiveNum(numArray) {
    let sum = 0
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {sum += numArray[i]}
} console.log(sum)
}
sumPositiveNum(numArray)
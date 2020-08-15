
// Given two arrays, find the tiny pairs less than a given var(third argument)
let arr1 = [16, 1, 4, 2, 14]
let arr2 = [7, 11, 2, 0, 16]

let tinyPairs = 0
function countTiny(first, second, val) {
    // a = left to right, b = right to left
    let k = second.length
    for (let i = 0; i < first.length; i++ && k--) {
        let pair = parseInt("" + first[i] + second[k])
        if (pair < val) { tinyPairs++ }
    }
    console.log(tinyPairs)
}


countTiny([1, 2, 3], [1, 2, 3], 31)
// Output should be number of pairs
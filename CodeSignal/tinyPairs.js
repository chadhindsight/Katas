// Given two arrays, find the amount of tiny pairs (x,y)
// where x is from first array and y is from the second
let arr1 = [16, 1, 4, 2, 14]
let arr2 = [7, 11, 2, 0, 16]



function countTiny(firstArr, secondArr, val) {
    // mutiple pointers
    let keyB = secondArr.length;
    let tinyPairs = 0

    //Edge cases
    if (firstArr.length === 0 || firstArr.length !== secondArr.length) console.log(0)

    // Everything else
    for (i = 0; i < firstArr.length; i++) {
        keyB--
        let pair = parseInt("" + firstArr[i] + secondArr[keyB])
        if (pair < val) { tinyPairs++ }
    }
    console.log(tinyPairs)
}


countTiny(arr1, arr2, 743)
// Output should be number of pairs

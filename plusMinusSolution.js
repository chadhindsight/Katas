// Print the ratios of positive, negative and zero values in the array. 
// Each value should be printed on a separate line with  digits after the decimal. 
// The function should not return a value.

function plusMinus(arr) {
    // vars to hold the number of positive, negative, and zero
    let positive = 0
    let negative = 0
    let zero = 0
    const denominator = arr.length
    // Loop and use Math.sign() to determine the sign of each value
    for (let num of arr) {
        if (Math.sign(num) === 1) positive++
        if (Math.sign(num) === -1) negative++
        if (Math.sign(num) === 0) zero++
    }
    console.log(positive / denominator.toFixed(6))
    console.log(negative / denominator.toFixed(6))
    console.log(zero / denominator.toFixed(6))
}
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iterative. O(n)
// function fib(n) {
//     // Create an array with all numbers up to n
//     let result =[0,1]

//     for(let i =2; i <= n; i++) {
//         // get previous numbers
//         const prev = result[i - 1]
//         const prev2 = result[i - 2]
//         result.push(prev + prev2)
//     }
//     // Return the nth value from the array 
//     return result[n]
// }

// Recursion
function fib(n) {
    if(n < 2) return n

    return fib(n -1) + fib(n -2)
}

module.exports = fib;

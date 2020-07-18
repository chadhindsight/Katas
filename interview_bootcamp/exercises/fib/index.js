// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iterative. O(n) time
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

// Recursion with Memoization
// Write a new func in charge of Memoization and pass old fib as an arg
function memoize(fn) {
    const cache = {}
    // This is the faster function that receives the args passed to 
    // the slower fib function and it checks if fib was previously called with the args stored
    // the cache object
    return function(...args) {
        if(cache[args]) return cache[args]
        const result = fn.apply(this, args)
        // Store the new result in cache
        cache[args] = result
        return result;
    }
}

function fib(n) {
    if(n < 2) return n

    return fib(n -1) + fib(n -2)
}
// Call the new memoized fib function
 fib = memoize(fib) 

module.exports = fib;

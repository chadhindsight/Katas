// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// SOLUTION 2. Without using reverse method. 0(n) time
// function reverse(str) {
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed
//     }
//     return reversed
// }

// SOLUTION 3. With .reduce()
 function reverse(str) {
    return str.split('').reduce((rev, character)=> character  + rev,'');
 }

module.exports = reverse;

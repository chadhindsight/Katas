// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// SOLUTION 1.
// function palindrome(str) {
//     const rev = str.split('').reverse().join('')
//     return str === rev;
// }

//SOLUTION 2. Using every() method. Not as good because of double comparison.
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length -i - 1]
    });
};

module.exports = palindrome;

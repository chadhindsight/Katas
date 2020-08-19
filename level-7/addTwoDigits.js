
// You are given a two-digit integer n. Return the sum of its digits.
function addTwoDigits(n) {
    //Make a string and then split
    return n.toString().split('').reduce((x, y) => +x + +y)
}
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//SOLUTION. Frequency counter
function maxChar(str) {
    let chars = {}
    let max = 0

    for (let letter of str) {
        chars[letter] = (chars[letter] || + 1);
    }

    for (let val in chars) {
        chars[val] > max ? max = val : chars[val]
    }
    return max
}

module.exports = maxChar;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//SOLUTION. Frequency counter
function maxChar(str) {
    let max = 0;
    let maxChar = 0;

    const chars = {};

    for(let letter of str) {
        chars[letter] = (chars[letter] || 0 + 1);
    }

    for(let char in chars) {
        chars[char] > max ? max = maxChar = char : chars[char] 
    }
    return maxChar
}

module.exports = maxChar;

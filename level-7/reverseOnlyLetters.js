// Given a string str, reverse it omitting all non - alphabetic characters.
function reverseLetter(str) {
    let changed = str.replace(/[^a-zA-Z]/gi, '')
    return changed.split('').reverse().join('')
}
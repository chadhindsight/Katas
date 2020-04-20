// Check if string has duplicates and return them as new string
function onlyDuplicates(str) {
    // your code here
    return str.split('').filter(x => str.indexOf(x) != str.lastIndexOf(x)).join('')
}

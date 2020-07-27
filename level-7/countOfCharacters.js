// Return a  count of charaters in descending order
var orderedCount = function (text) {
    letters = text.split("")
    var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)

    return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}
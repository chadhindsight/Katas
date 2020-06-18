// Move the first letter of each word to the end of it, then add "ay" to the end of the word
function pigIt(str) {
    let arr = str.split(' ')

    //Loop through each word and put first letter & 'ay' towards end 
    return arr.map(word => {
        let w = word.slice(0, 1)
        let restOfString = word.slice(1)
        return `${restOfString}${w}ay`
    }).join(' ')
}
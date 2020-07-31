function firstNotRepeatingCharacter(s) {
    //Use a loop to check the index of the non reapedted char
    for (let letter of s) {
        if (s.indexOf(letter) === s.lastIndexOf(letter)) {
            return letter
        }
    }
    return '_'
}
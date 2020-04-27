//Count lowercase letters in a given string and return the letter count
function letterCount(s) {
    let res = {}
    // Split and sort the newly converted array and then check occurence of characters 
    s.split('').sort((a, b) => a - b).forEach(el => res[el] ? res[el]++ : res[el] = 1)

    return res;
}
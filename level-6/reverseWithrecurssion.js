// reverse a string using recurssion
function reverse(str) {
    //   edge case
    if (str === '') return ''

    // Use splice  
    return reverse(str.slice(1)) + str[0];
}
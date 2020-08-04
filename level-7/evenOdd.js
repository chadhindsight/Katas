// Return the difference between even and odd numbers
function solve(a) {
    //  Loop through and use two seperate vars to track even and odd
    // Increment when one has to change
    let array = a.filter(item => {
        return typeof item === 'number'
    })

    let odd = 0
    let even = 0

    for (let d of array) {
        if (d === 0 || d % 2 === 0) even++
        else { odd++ }
    }

    return even - odd;
};
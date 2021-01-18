// Find the product of the k maximal numbers in an array
function maxProduct(numbers, size) {
    let p = []

    //loop through array and remove Math.max()
    for (let i = 0; i < size; i++) {
        //Remove from numbers and push to the p array
        let maximum = Math.max(...numbers)
        numbers.splice(numbers.indexOf(maximum), 1)
        p.push(maximum)
    }

    return p.reduce((x, y) => x * y)

}


// return the index of the least number larger than the element at the given index
function leastLarger(a, i) {
    let arr = []
    let indexVal = a[i]
    //find all elements more than the value of a[i] and push to new arr   
    for (let ass of a) {
        if (ass > indexVal) arr.push(ass)
    }

    //if arr is not empty, return indexOf the least value from arr
    if (arr.length !== 0) return a.indexOf(Math.min(...arr))

    return -1
}
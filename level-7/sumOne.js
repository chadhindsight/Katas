//  Your task will be to return the sum of the numbers that occur only once.
// example arr = [23, 4, 23, 100, 100, 69]

function repeats(arr) {
    let onlyOnce = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
    return onlyOnce.reduce((a, b) => a + b)
};


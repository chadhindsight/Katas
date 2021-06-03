// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]


// SOLUTION 1
// function chunk(array, size) {
//     // make an empty array to hold chunks
//     let chunked = [];

//     for(let el of array) {
//         const last = chunked[chunked.length - 1];
//         !last || last.length === size ? chunked.push([el]) : last.push(el)
//     }
//     return chunked
// }

// SOLUTION 2
function chunk(array, size) {
    const chunked = [];
    let index = 0
    while (index < array.length) {
        let valuesFromArray = array.slice(index, index + size)
        chunked.push(valuesFromArray)
        index += size
    }
    return chunked
}

module.exports = chunk;

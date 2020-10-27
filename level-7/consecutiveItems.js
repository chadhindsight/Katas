//  Return true or false based on whether or not a and b are consecutive in the arr
function consecutive(arr, a, b) {
    //Edge case if arr is empty
    if (arr.length === 0) return false


    if (arr.includes(a) && arr.includes(b)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === b && arr[i + 1] === a) return true
            if (arr[i] === a && arr[i + 1] === b) return true

        }
    }
    return false
}
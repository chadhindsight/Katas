// FIND NTH POWER OF INDEX AT N
function index(array, n) {
    //Edge case 
    if (n >= array.length) return -1
    // n is exponent of n indexed value
    return array[n] ** n
}
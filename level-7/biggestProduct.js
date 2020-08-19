// Given an array of integers, find the pair of adjacent 
// elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
    var arr = inputArray;
    var x = 0;
    var y = 0;
    var p = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < arr.length; i++) {
        x = arr[i];
        y = arr[i + 1];
        if (x * y > p) {
            p = x * y;
        };
    };
    return p;
}
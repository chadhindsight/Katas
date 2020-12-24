function tuckIn(arr1, arr2) {
    //Create a function that takes two arrays and 
    //insert the second array in the MIDDLE of the first array
    arr1.splice(Math.round(arr1.length / 2), 0, ...arr2)

    return arr1
}
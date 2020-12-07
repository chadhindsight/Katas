// Given an array/list [] of integers, 
// Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]

function productArray(numbers) {
    let answer = []
    const arrProd = numbers.reduce((a, b) => a * b)
    //Loop through each el and find product of array minus current el
    // Push that val to a new array
    for (let i = 0; i < numbers.length; i++) {
        answer.push(arrProd / numbers[i])
    }
    return answer
}
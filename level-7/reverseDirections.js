// In this Kata, you will be given directions and your task will be to find your way back

function solve(arr) {
    let j = arr.length - 1
    //use substring to get last part of str
    //insert at the end of the last str in arr 
    return arr.map((str, i, arr) => {
        // decrease pointer for each iteration
        let toRemove = str.substr(str.indexOf('on'))
        let toInsertAtStart = arr[j].substr(arr[j].indexOf('on'))
        console.log(j)
        j--
        return str.replace(toRemove, toInsertAtStart)
    })
}
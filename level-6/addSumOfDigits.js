var getLucky = function (s, k) {
    // string to reference each letter of the alphabet
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let tempStr = ""
    // a hash to store letter:number as key value pairs
    let strHash = {}

    for (let i = 0; i < alpha.length; i++) {
        strHash[alpha[i]] = i + 1
    }

    // Loop through the given input string and add the corresponding value from our hash

    for (let i = 0; i < s.length; i++) {
        tempStr += hash[s[i]]
    }

    res = tempStr.split("").reduce((a, b) => Number(a) + Number(b))
    let counter = k
    // Covers the case where we only need to sum digits once
    if (k === 1) {
        return res
    }
    console.log("from outside loop", res)

    // Covers cases where we need to sum digits more than once?
    while (counter > 1) {
        res = res.toString().split("").reduce((a, b) => Number(a) + Number(b))
        counter--
        console.log(counter, res)
    }
    return res
};

// Alternate
// var getLucky = function (s, k) {
//     let sum = '';

//     // Convert each letter to its position in the alphabet and concatenate as a string
//     for (let i = 0; i < s.length; i++) {
//         let value = s[i].charCodeAt();
//         sum += (value - 97) + 1;
//     }

//     // Perform the digit sum transformation k times
//     for (let i = 0; i < k; i++) {
//         sum = sum.split('').reduce((x, y) => parseInt(x) + parseInt(y), 0).toString();
//     }

//     return parseInt(sum);
// };
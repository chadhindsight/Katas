// Create a moreZeros function which will receive a string for input, and return an array containing 
// only the characters from that string whose binary 
// representation of its ASCII value consists of more zeros than ones.

function moreZeros(s) {
    //remove duplicates
    let arr = s.split('').filter((val, i, arr) => arr.indexOf(val) === i).
        filter((x, index, arr) => {
            //Check if it has more zeroes than ones  
            let ones = 0
            let zeroes = 0

            const trash = x.charCodeAt().toString(2)
            for (let i = 0; i < trash.length; i++) {
                trash[i] === '0' ? zeroes++ : ones++
            }
            if (ones < zeroes) return trash
        })

    return arr
}
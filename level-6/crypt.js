// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. 
// The array crypt will contain three non-empty strings that
//  follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.
function isCryptSolution(crypt, solution) {
    const [a, b, c] = crypt;
    const map = {};
    solution.forEach((item) => map[item[0]] = +item[1])

    const convert = (n) => {
        if (!map[n[0]] && n.length > 1) return NaN;
        return +n.split('').map(l => map[l]).join('')
    }

    return convert(a) + convert(b) === convert(c);
}
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1
// function anagrams(stringA, stringB) {
//     const charMap1 = buildCharMap(stringA)
//     const charMap2 = buildCharMap(stringB)
    
//     // check edge case by comparing the length of keys in each object 
//     if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//         return false
//     }
//     for(let char in charMap1) {
//         if(charMap1[char] !== charMap2[char]) {
//             return false
//         }
//     }
//     return true
//     //Create a helper function
//      function buildCharMap(str) {
//          const charMap = {};

//          for (let char of str.replace(/[^\w] /g, "").toLowerCase()){
//              charMap[char] = charMap[char] + 1 || 1
//          }
//          return charMap
//      }
// }

// SOLUTION 2
function anagrams(stringA, stringB) {
    // This prevents you from comparing by character to character
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = anagrams;
// str.replace([^\w]/g, "").toLowerCase();
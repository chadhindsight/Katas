// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION 2. Recurssion
// function steps(n, row = 0, stair = '') {
//     // Base case
// //     if (n === row) {
// //         return;
// //     }

// //     if (n === stair.length) {
// //         console.log(stair);
// //         return steps(n, row + 1);
// //     }
// //     // Make changes and goes to a new row if necessary
// //     const add = stair.length <= row ? '#' : ' ';
// //     steps(n, row, stair + add);
// // }
// }

// SOLUTION 1.
function steps(n) {
    // Row
    for (let row = 0; row < n; row++) {
        let stair = '';
        // Column. Inner loop goes first, then the outer loop
        for (let col = 0; col < n; col++) {
            col <= row ? stair += '#' : stair += ' '
        }
        console.log(stair)
    }
}

module.exports = steps;

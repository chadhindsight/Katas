// You are given the total volume m of the building. 
// Being given m can you find the number n of cubes you will have to build?
function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
        n++;
        sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
}
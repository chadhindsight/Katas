// group an array of arrays by their mean values
let arrs = [
    [3, 3, 4, 2],
    [4, 4],
    [4, 0, 3, 3],
    [2, 3],
    [3, 3, 3],
];
let obj = {};
arrs.forEach((eachArr, index) => {
    let mean = eachArr.reduce((accum, curr) => accum + curr) / eachArr.length;
    console.log(mean);
    if (obj[mean]) obj[mean].push(index);
    else obj[mean] = [index];
});
console.log(obj);
let arrs2 = Object.values(obj);
console.log(arrs2);
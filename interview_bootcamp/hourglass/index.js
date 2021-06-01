// Complete the hourglassSum function below.
function hourglassSum(arr) {
    //Outer loop bounds should be set to .length - 2
    let res = -63
    let tmp = 0

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            tmp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            if (tmp > res) {
                res = tmp
            }
        }
    } return res
}
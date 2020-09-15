// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
function dup(s) {
    return s.map(w => {
        return w.split('').filter((c, i, arr) => {
            return c !== arr[i - 1];
        }).join('');
    });
};

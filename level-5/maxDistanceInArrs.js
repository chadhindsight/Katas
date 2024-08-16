// given m arrays, where each array is sorted in ascending order
// Return the maximum distance aka biggest difference
function maxDistance(arrays) {
    let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];

    let maxDistance = 0;

    for (let i = 1; i < arrays.length; i++) {
        // Calculate the maximum distance with the current array
        maxDistance = Math.max(maxDistance, Math.abs(arrays[i][arrays[i].length - 1] - minVal));
        maxDistance = Math.max(maxDistance, Math.abs(maxVal - arrays[i][0]));

        // Update global min and max values
        minVal = Math.min(minVal, arrays[i][0]);
        maxVal = Math.max(maxVal, arrays[i][arrays[i].length - 1]);
    }

    return maxDistance;
}
function reverse(arr) {
    return arr.reverse();
}

Array.prototype.reverse = function () {
    let left, right;
    for (left = 0; left < this.length / 2; left++) {
        right = this.length - 1 - left;
        let temporary = this[left];
        this[left] = this[right];
        this[right] = temporary;
    }
    return this;
}
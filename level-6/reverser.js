//Reverse a number without making it a string
function reverse(n) {
    var revNumber = 0;
    while (n > 0) {
        revNumber = (revNumber * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return revNumber;

}
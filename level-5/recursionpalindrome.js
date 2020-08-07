// Check if a string is a palindrome
function isPalindrome(str) {
    // Edge cases
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    // Actual Recurssion
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}
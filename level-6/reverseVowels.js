// reverse the vowels in a string
function reverseVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    // If not matched, return original string, otherwise do something else
    return (vowels === null) ? str : str.replace(/[aeiou]/gi, c => vowels.pop());
}
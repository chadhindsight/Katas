// reverse the vowels in a string
function reverseVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return (vowels === null) ? str : str.replace(/[aeiou]/gi, c => vowels.pop());
}
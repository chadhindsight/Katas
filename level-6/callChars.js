// check if string has all characters
function regexContainsAll(str) {
    let chars = str.split('');
    let pattern = '';
    chars.forEach(c => {
        pattern += `(?=.*${c})`;
    });
    return pattern;
}
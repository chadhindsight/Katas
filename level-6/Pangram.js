function isPangram(string) {
    let regex = /[^a-z]+/gi;
    const worth = string.toLowerCase().replace(regex, '');
    const itsMatched = new Set(Array.from(worth)).size;
    return itsMatched === 26;
}
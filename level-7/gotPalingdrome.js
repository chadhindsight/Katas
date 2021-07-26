//  Given a string, determine if it can be rearranged into a palindrome. 
// Return the string YES or NO.
function gameOfThrones(s) {
    // create a hash to check frequency of letters
    let charMap = {}
    
      for (let char of s.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
    // var keep track of letters that appear an odd number of times
    let oddCounter = 0
    
    // check frequency in charMap
    for(let letter in charMap) {
        if (charMap[letter] % 2 !== 0) oddCounter++;
    }
    
    // if oddCounter is > 1 return 'NO'
    console.log(oddCounter)
    if(oddCounter > 1) return 'NO'
    
    else {return 'YES'}
}

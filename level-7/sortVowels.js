// Write a function which takes a input string s 
//and return a string in the following way:
   //                C|                          R|
   //                |O                          n|
   //                D|                          d|
   // "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
   //                W|                          T|
   //                |A                          |e
   //                R|                          5|
   //                S|                          T|

   function sortVowels(s){
  let vowels = 'aeiou'
  let str = ''

  //Edge case if s is not a string
  if(typeof s !== 'string') return ''
  
  // loop through string
  for(let char of s) {

    //save a lowercase version of char for vowel reference     
    let low = char.toLowerCase();
    
    if(vowels.includes(low)) {
      str += `|${char}\n` 
    }

    else {str += `${char}|\n`}
  }
  
  // Remove trailing /n
   return str.slice(0, -1)
}
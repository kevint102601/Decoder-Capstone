// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //           "012345678910 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25"
  function caesar(input, shift, encode = true) {
    let lookup = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let result = [];
    
    let lowerCaseInput = input.toLowerCase().split("")  
    if(!shift || shift < -25 || shift > 25) {
      return false
    }
     lowerCaseInput.forEach((char, index) => {     // loop through your input
        if (lookup.includes(char)) {     
          lookup.find((letter, index) => {
            if (char === letter) {
              let newIndex;  
              if (encode === true)
               newIndex = index + shift;     
              else
                newIndex = index - shift
              
        if(newIndex > 25) {
          newIndex = newIndex - 26
        }
        if (newIndex < 0) {
          newIndex+=26
        }
        // console.log(newIndex)
        let newChar = lookup[newIndex];
              result.push(newChar) }
          })
        } else {
          result.push(char);     // push the new alphabet new index into tht result
        }
      });
    return result.join('');
              
              
      
    
    
    
    
    
    
    //look at each character in the string one by one and for each character
      //if the current character is in the alphabet, find the index of the current character in the lookup
      //add the shift to that index
      //find the character at the shifted index and add it to our result
  }
//   console.log(caesar("hello world", -3,));

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
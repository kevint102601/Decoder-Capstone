// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet="", encode = true) {
    const unqiueCharacters = new Set(alphabet).size;
    if (!alphabet || unqiueCharacters !== 26) return false;
    
//    if (alphabet.length !== 26) {
//      return false;
//    } 
   const alpha = "abcdefghijklmnopqrstuvwxyz";
                  
    let finalResult = "";
    
    let from = alpha;
    let to = alphabet;
    
    if (encode === false) {
      to = alpha 
      from = alphabet
    }
   for (let i = 0; i < input.length; i++) {
     let char = input[i]
     
     if (char === " ") {
       finalResult+=char
     } else {
      let index = from.indexOf(char)
      finalResult+=to[index]
     }
     
   }
    return finalResult;
  }

  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };

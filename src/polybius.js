// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const lookUpEncode = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 44,
    "p": 54,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55
  }
  
  let reverseLookup = {
    "11": "a",
    "21": "b",
    "31": "c",
    "41": "d",
    "51": "e",
    "12": "f",
    "22": "g",
    "32": "h",
    "42": "i/j",
    "52": "k",
    "13": "l",
    "23": "m",
    "33": "n",
    "44": "o",
    "54": "p",
    "14": "q",
    "24": "r",
    "34": "s",
    "44": "t",
    "54": "u",
    "15": "v",
    "25": "w",
    "35": "x",
    "45": "y",
    "55": "z"
    
    
    
  }
  

  function polybius(input, encode = true) {
    let result = "";
    if (encode === false) {
     for (let i = 0; i < input.length; i++) {
       let char = input[i];
       if (char === " ") {
         result+=" "
       } else {
         i++;
         if (input[i]) {
         char+=input[i]
         result+=reverseLookup[char]
         } else {
           return false
         }
       }
       
     }
    } else {
      for (let i = 0; i < input.length; i++) {
       let char = input[i];
       if (char === " ") {
         result+=" "
       } else {
         
         result+=lookUpEncode[char]
       }
      }
    }
    return result;
    
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

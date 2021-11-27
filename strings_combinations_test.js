/**
 * Given a string, construct the longest string in which all characters are in alphabetical order by omitting letters in the input string
 *
 * Examples:
 *    apple  --> app
 *    banana --> ann
 *    cba    --> a
 *    cbbaaa --> aaa
 *
 * @param  {string} word Lowercase string containing letter a-z
 *
 * @return {string} Longest string which's characters are in alphanumerical order
 *
 *
 * Notes:
 * - Consider that the idea is not to sort the input string.
 * - It is not needed to check for capital letters, assume that every letter in the word received is lowercase
 */
 function extractLongestAlphabeticalString(word) {

    let arrComb = [];
    let comb = '';
    console.log('Word: ' + word);
    arrComb = getCombinations(word, comb, arrComb);
  
    let maxlength = 0;
    let arrLongestComb = [];
    
    for ( i=0; i < arrComb.length ; i++ ) {
        comb = arrComb[i];
        if ( comb.length > maxlength ){
          maxlength = comb.length; // set new max length
        arrLongestComb = [comb]; // reset new longestComb
      } else if (comb.length === maxlength && !arrLongestComb.includes(comb)) { // if they are equal and it is not in arrLongestComb, add to array
        arrLongestComb.push(comb);
      }
    }
  
    // filtered array
    console.log(arrLongestComb);
    return arrLongestComb;
  }
  
  // try with recursive function since I notice that it has tree behavior
  // word: is the string to be traced
  // comb: is the combination string that is being built
  // arrComb: is array of combinations that is being built
  function getCombinations(word, comb, arrComb){
    
    // condition to cut
    if (word.length < 1 && comb.length < 1){
      return arrComb;
    }
  
    // condition to insert new combination in array
    if ( word.length < 1 ) {
        arrComb.push(comb);
      return arrComb;
    } 
      
    let arrComb1 = [];
    let arrComb2 = [];
    combLastChar = (comb[comb.length - 1] != undefined )? comb[comb.length - 1]: '';
    if ( combLastChar <= word[0] ) {
      // do not omit char   
      arrComb1 = getCombinations(word.substring(1), comb + word[0], arrComb);
    } 
    
    // do omit char or can't add it
    arrComb2 = getCombinations(word.substring(1), comb, arrComb);
  
    // concat the arrays to return a global result
    return arrComb1.concat(arrComb2);
  
  }
  
  
  
  
  
  
  /**
  
  TESTS
  
  
  */
  
  const strings = [
    ['apple', ['app']],
    ['banana', ['aaa','ann', 'bnn','aan']],
    ['cba', ['a','b','c']],
    ['cbbaaa', ['aaa']],
    ['thisissoooocoool', ['hiiooooooo']],
    ['satyaisolvedit', ['aaisv','aaiov','aailv','aaist','aaiot','aailt','aaiit','aaeit','aadit']],
    ['itdoesnotworkfortoolongstrings', ['denoooooost','denooooooss','denoooooors']],
  ];
  
  strings.forEach(([str, cor]) => {
    const elem = document.createElement('div');
    const ans = extractLongestAlphabeticalString(str);
    var arrayedAns = Array.isArray(ans)?ans:ans.split(",");
    var isCor = arrayedAns.length > 0;
    arrayedAns.forEach((curr)=>{
        isCor = isCor && cor.includes(curr);
    });
    elem.innerHTML = `${isCor ? "OK" : "FAILED"} ${str} --> ${ans} ${isCor ? "" : "expected " + cor}`
    console.log('RESULT : ');
    console.log(elem);
    document.body.appendChild(elem)
  });
  
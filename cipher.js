let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



function encipher(str, shift) {
  //split string into array of letters
  let letters = str.split('');
  console.log(letters);
  let ciphered = [];
  //run through loop that matches with the alphabet array I've made,
  for (let n = 0; n < letters.length; n++) {

    for (let i = 0; i < alpha.length; i++) {

      if(letters[n] === alpha[i]){

        if ( (alpha.indexOf(alpha[i]) + shift) > 26) {
            let shifter = ((i+shift)-26);
            ciphered.push(alpha[shifter]);
        }
        else if( (alpha.indexOf(alpha[i]) + shift) < 0 ){
            let unshifter = ((i+shift)+26);
            ciphered.push(alpha[unshifter]);
            console.log(ciphered);
        }
        else{
          ciphered.push(alpha[i+shift]);
          console.log(ciphered);
        }

      }
    }
  }


  //then shift accordingly.
  //concatenate that array back into a string
  let newWord = ciphered[0];
  console.log(newWord)
  for (let i = 1; i < ciphered.length; i++) {
    newWord += ciphered[i];
  }
  //spit it back out
  return newWord;
}

function decipher(str, shift) {

  let letters = str.split('');
  console.log(letters);
  let ciphered = [];
  //run through loop that matches with the alphabet array I've made,
  for (let n = 0; n < letters.length; n++) {

    for (let i = 0; i < alpha.length; i++) {

      if(letters[n] === alpha[i]){

        if ( (alpha.indexOf(alpha[i]) - shift) > 26) {
            let shifter = ((i-shift)-26);
            ciphered.push(alpha[shifter]);
        }
        else if( (alpha.indexOf(alpha[i]) - shift) < 0 ){
            let unshifter = ((i-shift)+26);
            ciphered.push(alpha[unshifter]);
            console.log(ciphered);
        }
        else{
          ciphered.push(alpha[i-shift]);
          console.log(ciphered);
        }

      }
    }
}
let newWord = ciphered[0];
console.log(newWord)
for (let i = 1; i < ciphered.length; i++) {
  newWord += ciphered[i];
}
//spit it back out
return newWord;
}

module.exports = {
  encipher,
  decipher
}

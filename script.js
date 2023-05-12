// complete the given function

function palindrome(str){
str = str.toLowerCase().replace(/[\W_]/g, '');
  
  // check if the reversed string is equal to the original string
  return str === str.split('').reverse().join('');
}
module.exports = palindrome

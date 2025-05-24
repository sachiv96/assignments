/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
alpha=str.toLowerCase().replace(/[^a-z0-9]/g,'')
return alpha===alpha.split('').reverse().join('')

}




console.log(isPalindrome("Madam"))







module.exports = isPalindrome;

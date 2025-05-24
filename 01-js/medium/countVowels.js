/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let v2 = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let str1 = str.toLowerCase().split('')
  for (let i = 0; str1.length > i; i++) {
    if (vowels.includes(str1[i])) {
      v2 += 1
    }
    else {
      continue
    }
  }
  return v2
}

console.log(countVowels("harikiratsir"))




module.exports = countVowels;
/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let bignum=0
    for(let i=0;numbers.length>i;i++){
    if(numbers[i]>bignum){
        bignum=numbers[i]
    }
    else{
        continue
    }
    }
    return bignum

} 
console.log(findLargestElement([1,5,8,4,5,3,6,3,444]))
module.exports = findLargestElement;
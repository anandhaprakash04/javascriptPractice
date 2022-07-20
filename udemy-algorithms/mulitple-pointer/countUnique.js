
/** 
 * Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array, 
 * There acn be negative number in the array, but it will always be sorted
 */

console.log(countUniquevalue([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniquevalue([]));
console.log(countUniquevalue([-1,-2,-3,-4,-4,-5]));

function countUniquevalue(arr) {
  if(!arr.length) return 0;
  let i=0;
  let j=1;
  let temp = [arr[0]];
  while (j < arr.length){
      if(temp[i] !== arr[j]){
          temp.push(arr[j]);
          i++;
      }else {
          j++;
      }
  }
  console.log(temp);
  return temp.length;
}

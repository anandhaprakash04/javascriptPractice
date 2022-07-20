/**
--------------------------------------- 
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
  
WAF that determines whether the second array is a subsequence of the first one, given two non-empty arrays of integers.
---------------------------------------
I/P - 
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence  = [1, 6, -1, 10]
O/P - true
---------------------------------------
I/P - 
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence  = [1, -1, 6, 10]
O/P - false 
---------------------------------------
*/

console.log(isSub([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isSub([5, 1, 22, 25, 6, -1, 8, 10], [1, -1,  6, 10]));

function isSub(arr, seq) {
    let [i,j] = [0,0];
    while(i < arr.length){
        if(arr[i] === seq[j]) j++;
        i++;
    }
    return (j === seq.length) 
}

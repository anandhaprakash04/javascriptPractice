/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form a subsequence
 * of the characters in the second string. In other words, the function
 * should check whether the characters in the first string appear somewhere
 * in the second string, without their order changing.
 */

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    console.log('===========================', str1, str2)
    while (j < str2.length) {
        console.log(str2[j], str1[i], i, j)
        if (str2[j] === str1[i]) i++;
        console.log(i, str1.length)
        if (i === str1.length) return true;
        j++;
    }
    return false;

}
console.log(isSubsequence('singer', 'stinges'));// true
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting'));// true
// console.log(isSubsequence('sing', 'stgaind')) // false                      
// console.log(isSubsequence('abc', 'abracadabra'));// true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)






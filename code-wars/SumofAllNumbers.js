/* One project is this: Given two integers, which can be positive and negative, 
 * find the sum of all the numbers between including them too and return it.
 * If both numbers are equal return a or b.
 */

function GetSum(a,b) {
    if(a === b ){
        return a
    } else {
        if(a > b) [a, b] = [b, a]
        let sum = a;
        while(a < b ){
            sum = sum + (a + 1);
            a++;
        }
        return sum;
    }
}

console.log(GetSum(2,1));
function narcissistic(value) {
    // Regular way
    /* const str = value.toString();
    const digits = str.length;
    let sum = 0;
    for(let i=0; i< digits; i++){
        sum = sum + Math.pow(parseInt(str.charAt(i)), digits);
    }
    return value === sum;
    */
   // Best and clever
   return (value.toString()).split('').reduce((sum, currentValue) => {
       console.log(sum, currentValue)
        return sum + Math.pow(currentValue, value.toString().length)
   }, 0) === value;
}

console.log(narcissistic(1652));
console.log(narcissistic(153));
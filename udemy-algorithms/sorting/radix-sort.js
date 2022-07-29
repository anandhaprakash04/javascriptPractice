

function getDigit(num, i){
    return Math.floor(num/ Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(array){
    return array.reduce((p, c, arr) => {
        return Math.max(digitCount(c), p);
    }, 0)
}

radixSort([12,234,123,124,1245,152,112])

function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);
    for(let k =0 ; k<maxDigitCount; k++){
        const buckets = Array.from({length : 10}, () => []);
        for(let i=0;i < nums.length; i++){
            const digit = getDigit(nums[i], k)
            buckets[digit].push(nums[i]);
        }
        nums = [].concat(...buckets);
    }
    console.log(nums);
}
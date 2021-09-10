console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([100, 200, 300, 400], 3));


function maxSubArraySum(){
    const [arr, num] = [arguments[0], arguments[1]];
    if(arr.length< num) return null;
    console.log('arr', arr);
    let tempSum = 0;
    for(let i=0;i<num;i++){
        tempSum +=arr[i]
    }
    let maxSum = tempSum;
    for(let i=num;i< arr.length -1 ;i++){
        // console.log('temp',i, tempSum);
        // console.log('max',i, maxSum);
        tempSum = tempSum + arr[i] - arr[i-num];
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }

    return maxSum;
}

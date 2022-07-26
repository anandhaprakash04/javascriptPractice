/*Input : arr[] = {10, 2, -2, -20, 10, -10}, k = -10
Output : 4
Explanation: Subarrays: arr[0…3], arr[1…4], arr[3..4] have a sum exactly equal to -10.

Input : arr[] = {9, 4, 20, 3, 10, 5}, k = 33
Output : 2
Explanation: Subarrays : arr[0…2], arr[2…4] have a sum exactly equal to 33.
*/

findSubarraySum([10, 2, -2, -20, 10], -10);

function findSubarraySum(arr,sum){
    // HashMap to store number of subarrays
    // starting from index zero having
    // particular value of sum.
    let prevSum = new Map();
    let res = 0;
    // Sum of elements so far.
    let currsum = 0;
    for (let i = 0; i < arr.length; i++)
    {

        // Add current element to sum so far.   
        console.log(1, currsum, arr[i], prevSum, res)
        currsum += arr[i];
        console.log(2, currsum, arr[i], prevSum, res)

        // If currsum is equal to desired sum,
        // then a new subarray is found. So
        // increase count of subarrays.
        if (currsum == sum){
            res++;
        }
        console.log(3, currsum, arr[i], prevSum, res)
        // currsum exceeds given sum by currsum
        //  - sum. Find number of subarrays having
        // this sum and exclude those subarrays
        // from currsum by increasing count by
        // same amount.
        if (prevSum.has(currsum - sum))
            res += prevSum.get(currsum - sum);
        console.log(4, currsum, arr[i], prevSum, res)
        // Add currsum value to count of
        // different values of sum.
        let count = prevSum.get(currsum);
        if (count == null)
            prevSum.set(currsum, 1);
        else
            prevSum.set(currsum, count + 1);
        console.log(5, currsum, arr[i], prevSum, res)
    }
    return res;
    }



// bubbleSort([2,14,12,432,141,1231])

//naive solution
function bubbleSort(arr) {
    for(let i=0;i< arr.length;i++){
        for(let j=0;j<arr.length-1;j++){ 
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
}

// bubbleSort1([2,14,12,432,141,1231])
// optimized
function bubbleSort1(arr) {
    for(let i=arr.length;i> 0;i--){
        for(let j=0;j<i-1;j++){ 
            console.log(arr[j] , arr[j+1] , i , j)
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
}


bubbleSort1([8,1,2,4,6,67,75])
// More optimized
function bubbleSort2(arr) {
    let noSwaps;
    for(let i=arr.length;i> 0;i--){
        noSwaps = true;
        for(let j=0;j<i-1;j++){ 
            console.log(arr[j] , arr[j+1] , i , j)
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
            if(noSwaps) break;
        }
    }
    console.log(arr);
}

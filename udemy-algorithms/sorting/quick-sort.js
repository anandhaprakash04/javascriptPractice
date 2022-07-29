
getPivotIndex([28,41,4,11,16,1,40], 0, 6)

getPivotIndex([4,8,2,1,5,7,6,3], 0, 8)

function getPivotIndex(arr, s=0, e=arr.length-1){
    let pivot = arr[s];
    let pivotIndex = s;
    for(let i = s+1; i<= e;i++) {
        console.log('befor', pivot , arr.toString(), i, pivotIndex)
        if(pivot > arr[i]){
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
        console.log('after', pivot , arr.toString(), i, pivotIndex)
    }
    [arr[s],arr[pivotIndex] ] = [arr[pivotIndex], arr[s]];
    console.log(arr);
}

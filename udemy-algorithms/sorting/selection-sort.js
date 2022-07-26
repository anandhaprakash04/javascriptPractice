
selectionSort1([2,14,12,432,141,1231])
selectionSort1([5,3,4,1,2])

function selectionSort(arr){
     for(let i=0; i < arr.length; i++){
        let [currMin, n] = [arr[i], i];
        for(let j=i+1;j<arr.length; j++){
            if(arr[j] < currMin ) 
                [currMin,n] = [arr[j], j];
        }
        [arr[i],arr[n]] = [currMin, arr[i]];
     }
     console.log(arr);
}

function selectionSort1(arr){
    for(let i=0; i < arr.length; i++){
       let currMin = i;
       for(let j=i+1;j<arr.length; j++){
           if(arr[j] < arr[currMin] ) currMin = j;
       }
        if(i !== currMin)
            [arr[i],arr[currMin]] = [arr[currMin], arr[i]];
    }
    console.log(arr);
}
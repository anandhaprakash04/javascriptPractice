

// insertionSort([2,1,35,3,6,6,22,3311,1552,21]);
// insertionSort([4,3,2,1]);

function insertionSort(arr){
    console.log(arr)
    for(var i=1;i <arr.length; i++){
        const current = arr[i];
        console.log('========')
        console.log( 'i=', i, ' current=' , current)
        let j =i-1
        while(j >= 0 && arr[j] > current){
            console.log('j=', j, ' arr[j+1]=', arr[j+1],' arr[j]=', arr[j])
            arr[j+1]= arr[j];
            j--
            console.log('arr= ', arr, 'j=', j);
        }
        arr[j+1] = current;
        console.log('arr= ', arr);
    }
    console.log(arr)
}

insertionSortYt([4,3,1,345,5342,123,4123,123,12,412,4,2,1]);

function insertionSortYt(array){

    for(let i=1; i< array.length; i++){
        for(let j = i; j >= 0; j--){
            if(array[j] < array[j-1]){
                [array[j], array[j-1]] = [array[j-1], array[j]]
            } else {
                break;
            }
        }
    }
    console.log(array);
}
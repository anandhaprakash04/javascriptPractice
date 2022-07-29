function quickSort(array){
    if(array.length <=1 ){
        return array;
    }
    const leftArr = []
    const rightArr = []
    const pivot = array[array.length -1]
    for(let i=0; i < array.length-1; i++){
        if(array[i] < pivot){
            leftArr.push(array[i])
        }else {
            rightArr.push(array[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([9,8,7,6,5,4,3,2,1]));
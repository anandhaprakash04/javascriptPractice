
// merge([1,10,50], [2,14,99,100]);
// merge([5,14,99,100], [3,3,4,10,50]);
// merge([1,3,50], [3,14,99,100]);


console.log(mergeSort([10,24,76,73]))

function mergeSort(arr){
    if(arr.length <= 1)  return arr
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    console.log(left, right);
    return merge(left, right);
}

function merge(a, b){
    let merged = []      
    let [i,j] = [0,0]
    while(i < a.length && j < b.length){
        if(a[i] <= b[j]){
            merged.push(a[i]);
            i++;
        } else {
            merged.push(b[j]);
            j++;
        }
    }
    //  while(i < a.length){
    //     merged.push(a[i])
    //     i++;
    //  }
    //  while(j < b.length){
    //     merged.push(b[j])
    //     j++;
    //  }
    // console.log(merged);
    return [...merged, ...a.slice(i), ...b.slice(j)];
}
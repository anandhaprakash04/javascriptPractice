// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
// console.log(averagePair([-1,0,3,4,5,6], 4.1));

function averagePair(){
    const arr = arguments[0];
    if(!arr.length) return false;
    let [i,j] = [0,1];
    while (i < arr.length){
        // console.log(i, j, arr[i] , arr[j]);
        if((arr[i]+arr[j])/2 === arguments[1]){
            return true;
        } else if (j >= arr.length) {
            i++
            j=0;
        } else {
            j++;
        }
    }

    return false;
}

console.log(averagePair1([1, 2, 3], 2.5));
console.log(averagePair1([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair1([-1,0,3,4,5,6], 4.1));

function averagePair1(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
}

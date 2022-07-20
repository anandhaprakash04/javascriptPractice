function sumZero(arr) {
    // start : 0
    // end: 0 
    // start + end === 0 return start and end
    // start + end returns > 0 end--; 
    // start + end returns < 0 start++
    let [s, e] = [0, arr.length-1];

    while(s < e){
        let sum = arr[s]+arr[e];
        if( sum=== 0){
            console.log('first if', arr[s], arr[e])
            s++;
            e--;
        } else if(sum > 0) {
            e--
        } else {
            s++
        }
    }
    console.log('at the end , nothing ');
}

sumZero([-3,-2,-1,0,1,2,3])
sumZero([-2,0,1,3])
sumZero([1,2,3])
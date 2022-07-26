
search([1,2,3,5,5,5,6,6,7,8],5)

function search(arr, num){
    let index = -1;
    let start = 0;
    let end  = arr.length-1;
    while(start <= end) {
        const mid = Math.floor((start+end)/2);
        const element = arr[mid];
        console.log(1, mid, element, num)
        if(element > num){
            end = mid -1
        } else if(element < num){
            start = mid+1
        } else {
            index = mid;
            break;
        }
    }
    console.log(2,index);
}
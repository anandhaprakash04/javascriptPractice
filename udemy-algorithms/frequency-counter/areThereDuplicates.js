function areThereDuplicates(){
    let counter = {};
    for(let i =0;i<arguments.length;i++){
        if(!counter[arguments[i]]){
            counter[arguments[i]] = (counter[arguments[i]] || 0) +1
        }else {
            return true
        }
    }
    return  false
}

console.log(areThereDuplicates(1, 2,3));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    counter = {};
    result = [];
    nums.forEach(num => {
        counter[num] = (counter[num] || 0) +1 
        if(counter[num] > 1){
            result.push(num);
        }
    });
    console.log(result)
};
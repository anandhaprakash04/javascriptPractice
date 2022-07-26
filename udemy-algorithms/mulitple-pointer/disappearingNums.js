findDisappearedNumbers([4,3,2,7,8,2,3,1]); //8
// findDisappearedNumbers([1,1,1,1,1,1,1,1]); //8
// findDisappearedNumbers([1,1]);

// function findDisappearedNumbers(nums) {
//     const result = [];
//     const n = nums.length;
//     let temp = 0;
//     let arr =[]
//     for(let i=1;i<=n;i++ ){
//         arr.push(temp+=1);
//     }
//     for(let key of arr) {
//         if(nums.indexOf(key) === -1){
//             result.push(key);
//         }
//     }   
//     return result;
// }


function findDisappearedNumbers(nums) {
    const result = [];
    const set = new Set();
    const obj = {};
    let temp = 0;
    nums.forEach(i => set.add(i));
    for(let i =1 ; i <= nums.length; i++){
        if(!set.has(i)){
            result.push(i);
        }
    }
    console.log(result);
    return result;
}
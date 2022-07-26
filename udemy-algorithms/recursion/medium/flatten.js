

function flatten(a){
    let newArr = []
    for(let i=0; i< a.length; i++){
        if(Array.isArray(a[i])){
            newArr = newArr.concat(flatten(a[i]));
        } else{
            newArr.push(a[i])
        }
    }
    return newArr;
}
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
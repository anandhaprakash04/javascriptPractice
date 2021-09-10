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

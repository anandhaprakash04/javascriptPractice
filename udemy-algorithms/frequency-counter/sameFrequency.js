function sameFrequency(s1, s2){
    if(s1.length !== s2.length){
        return false;
    }

    let s1Counter = {};
    s1.toString().split('').forEach((val) =>{
        s1Counter[val] = (s1Counter[val] || 0) + 1;
    })
    const s2S = s2.toString().split('');
    for(let i=0; i< s2S.length;i++) {
        if(!s1Counter[s2S[i]]){
            return false;
        } else {
            s1Counter[s2S[i]]-=1;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281));

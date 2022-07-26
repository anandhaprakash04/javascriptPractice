

find('hellollo', 'llo');
function find(s1, s2) {
    let counter = 0;
    for(let i = 0; i< s1.length; i++) {
        for(let j = 0; j< s2.length; j++) {
            console.log(s2[j], s1[i+j], i, j);
            if(s2[j] !== s1[i+j]) break;
            if(j == s2.length -1) counter++
        }
    }   
    console.log(counter)
}
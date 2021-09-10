function solution(str){
    let res = [];
    if(!str) return res;
    const v = str.split('')
    for(let i = 0; i<v.length; i=i+2){
            res.push((`${v[i]}${v[i+1]?v[i+1]:`_`}`))
    };
    return res;
}

solution('abcdefg')
solution('abc')

/**
 * Description : Complete the solution so that it splits the string into pairs of two characters. 
 * If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 */


solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']*/
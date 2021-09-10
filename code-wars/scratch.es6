
console.log(getPINs('00000000'));
function getPINs(observed) {
   const lock = [
       ['1','2','3'],
       ['4','5','6'],
       ['7','8','9'],
       ['','0',''],
   ]

    const findLocation = (value) =>{
       let [i, j] = [0,0];
        for(i=0; i< 4;i++){
            for(j=0; j< 3;j++){
                if(lock[i][j] == value){
                    // console.log('inside', i, j, lock[i][j] , value)
                    return [i,j]
                }
            }
        }
        return [i,j]
    }

    const findValues = (i,j) =>{
        // console.log(i,j,lock[i][j] )
        const value = lock[i][j];
        const top = value === '0' ? 8 : i === 0 ? '' :  lock[i-1][j]
        const bottom = value === '8' ? 0 : i === 3 ? '' :  lock[i+1][j]
        const left = j === 0 ? '' :  lock[i][j-1]
        const right = j === 2 ? '' :  lock[i][j+1]
        return [top, left, value, right,bottom].filter((v) => v !== '')
    }

    const cartesianProduct = (arr) => {
        return arr.reduce(function(a,b){
            return a.map(function(x){
                return b.map(function(y){
                    return x.concat([y]);
                })
            }).reduce(function(a,b){
                    return a.concat(b) },
                [])
        }, [[]])
    }

   const combinations = [];
    observed.toString().split('').forEach((digit) => {
        combinations.push(findValues(...findLocation(digit)));
    })
   const res = cartesianProduct(combinations);
   return res.map(arr => arr.join(''))
}

//
// function cartesianProduct(arr) {
//     return arr.reduce(function(a,b){
//         return a.map(function(x){
//             return b.map(function(y){
//                 return x.concat([y]);
//             })
//         }).reduce(function(a,b){
//             return a.concat(b) },
//             [])
//     }, [[]])
// }
//
// var a = cartesianProduct([[1, 2,3], [4, 5,6], [7, 8], [9,10]]);
//
// console.log(JSON.stringify(a));
// console.log(a.map(arr => arr.join('')));

/*
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));  // elloHay orldway !
console.log(pigIt('O tempora o mores !'));  // elloHay orldway !


function pigIt(str){
    return str.split(' ').map((v) =>{
        console.log(v, /(.*\w)/.test(v))
        return /(.*\w)/g.test(v) ? v.substr(1) + v.charAt(0)+'ay' : v;
    }).join(' ');
}


'O emporatay o oresmay !'
'Oay emporatay oay oresmay !'
*/

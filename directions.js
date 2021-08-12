// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript


function dirReduc(arr = []){

    const opp = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'WEST': 'EAST',
        'EAST': 'WEST'
    }

    return arr.reduce( (tempArr, value, i, arr) => {
        console.log('=>', tempArr);
        console.log('=>', tempArr[tempArr.length-1], '==>>',opp[value] );
        if(tempArr[tempArr.length-1] === opp[value]){
            tempArr.pop();
        } else{
            tempArr.push(value);
        }
        return tempArr
    }, [])
    // console.log(result);
    /*console.log('==================================================')
    let tempArr = [];
    for(let i=0;i< arr.length;i++){
        if(i==0){
            tempArr.push(arr[i]);
        } else{
            console.log('=> ', arr[i])
            console.log('<== ', tempArr)
            switch(arr[i]){
                case 'SOUTH':
                    if(tempArr[tempArr.length -1] === 'NORTH'){
                        tempArr.pop();
                    } else {
                        tempArr.push(arr[i])
                    }
                    break;
                case 'NORTH':
                    if(tempArr[tempArr.length -1] === 'SOUTH'){
                        tempArr.pop();
                    }else {
                        tempArr.push(arr[i])
                    }
                    break;
                case 'WEST':
                    if(tempArr[tempArr.length -1] === 'EAST'){
                        tempArr.pop();
                    }else {
                        tempArr.push(arr[i])
                    }
                    break;
                case 'EAST':
                    if(tempArr[tempArr.length -1] === 'WEST'){
                        tempArr.pop();
                    }else {
                        tempArr.push(arr[i])
                    }
                    break;
            }                    
        }
        console.log('^^ ', tempArr);
    }
    return tempArr;
    */
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) === ["WEST"]);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
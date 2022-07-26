
console.log(recursePower(2,4));

function power(base, exponent ) {
    let pow = base;
    for(let i=0;i< exponent -1 ;i++){
        console.log(pow);
        pow *=base ;
    }
    console.log(pow)
}


function recursePower(base, exponent){
    if(exponent == 0 )
        return 1
    return base * recursePower(base, exponent-1)
}
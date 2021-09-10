// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
    if(h < 0 || !(bounce > 0 && bounce < 1) || window > h ) return -1;
    let counter = 0;
    while(h > window){
        counter++;
        h = h* bounce;
    }
    return counter*2-1
}

console.log(bouncingBall(2.0, 0.5, 1));
console.log(bouncingBall(10,0.6,10));
console.log(bouncingBall(3.0, 0.66, 1.5));
bouncingBall(30.0, 0.66, 1.5);

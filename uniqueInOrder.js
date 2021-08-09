function uniqueInOrder(iterable){
    const output = [];
    for(v of iterable) {
        if(!output[output.length - 1] || output[output.length - 1] !== v) {
            output.push(v);
        }
    }
    return output;
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));
  console.log(uniqueInOrder('ABBCcAD'));
  console.log(uniqueInOrder([1,2,2,3,3]));
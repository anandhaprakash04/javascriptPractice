withdraw(40);
withdraw(250);
withdraw(260);
withdraw(230);
withdraw(60);
withdraw(370);

function withdraw(amount) {

    console.log('======================')
    let remaining = amount;
    const h = (amount % 100 === 10 || amount % 100 === 30) && amount >= 100 ? Math.floor(amount/100) -1 : Math.floor(amount/100) ;
    remaining = remaining  - h * 100 ;
    const f =  remaining % 20 === 0  ?  0 : remaining >= 50 ? 1 :0;
    remaining = remaining  - f *50 ;
    const t = Math.floor(remaining/20); 
    console.log(amount, '==> ', [h,f,t])
}
 
function withdraw1(amount){
    console.log(amount , '=======================')
    const remainderMod20 = amount % 20;
    console.log(remainderMod20);
    amount = amount / 20 - remainderMod20 / 4;
    console.log(amount);
    console.log([amount / 5 | 0, remainderMod20 % 3, amount % 5]);
  };
  

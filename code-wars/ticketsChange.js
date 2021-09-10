function  tickets(peopleInLine = [] ){
    // Refactored after submitting
    let bills = {
        a25 : 0,
        a50 : 0,
        a100 : 0,
     }
    const ok = peopleInLine.every((value) =>{
        bills[`a${value}`]++;
        switch(value){
            case 25:
                return true;
            case 50:
                bills.a25--;
                break;
            case 100:
                bills.a50 >= 1 ? bills.a50-- : bills.a25-=2
                bills.a25--
                break;
        }
        return bills.a25 >= 0 
    }) 
    return ok ? 'YES' : 'NO'
    // My initial logic
    /*if(value > 25) {
        if(value === 100 && ((a50 >= 1 && a25 >=1) || a25 > 2)){
            if(a50 >= 1){
                a50--
                a25--
            } else{
                a25 = a25 - 3;
            }
        } else if(value === 50 && a25 >=1){
                a25--;
        } else {
            console.log('Inside NO')
            ok = false;
            break;
        }      
        if(value === 25) a25++;
        if(value === 50) a50++;
        if(value === 100) a100++;
        ok = true;
    } else {
        a25++;
        ok = true;
    }*/
// return ok ? 'YES' : 'NO'
}

// console.log(tickets([25, 25, 25, 25, 25, 100, 100])) // YES
console.log(tickets([25,50,25,100,25,25,50,100,25,50,25,100,25,50,25,100])) // YES
// console.log(tickets([25,25,25,100,25,50,25,100,25,50,25,100,50,50])) // NO
// console.log(tickets([25, 25, 50])) // YES
// console.log(tickets([25, 100])) // NO
// console.log(tickets([25, 25, 50, 50, 100])) // NO
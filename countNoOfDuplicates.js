// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
    // convert to lower case and split the text into array
    const t = text.toLowerCase().split('');
    return t.reduce( (counter, currentValue, index, array) => {
        // if(array.includes(currentValue, index + 1) && 
        //    !array.slice(0,index < 1 ? 0 : index-1).includes(currentValue)){
        //     counter++;
        // }
        if(array.indexOf(currentValue) !== index && array.lastIndexOf(currentValue) === index){
            counter++;
        }
        return counter;
    }, 0)
  }



console.log(duplicateCount("") === 0);
console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("Indivisibility") === 1)
console.log(duplicateCount("Indivisibilities") === 2)


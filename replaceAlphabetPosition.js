/**
 * Welcome.
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * "a" = 1, "b" = 2, etc.
 * Example
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition(";@82{:]@");
alphabetPosition("2$;mf@k}");

// function alphabetPosition(text) {
//     const alphabet =  'abcdefghijklmnopqrstuvwxyz'.split('');
//     const onlyAlpha = text.toLowerCase().replace(/(\W)/g, '');
//     let result = (alphabet.indexOf(onlyAlpha[0]) + 1)
//     onlyAlpha.split('').slice(1).forEach((v,i) =>{
//         result = result + ' ' + (alphabet.indexOf(v) +1)
//     });
//     return result;
//   }

function alphabetPosition(text) {
    const onlyAlpha = text.toLowerCase().replace(/(\W)/g, '');
    let result = '';
    onlyAlpha.split('').forEach((v,i) => {
        result = result + getPosition(v);
    });
    return result.trim();
}

function getPosition(element) {
  const index = 'abcdefghijklmnopqrstuvwxyz'.split('').indexOf(element);
  return index < 0 ? '' :  ' ' + (index +1))
}


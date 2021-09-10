function sumTwoSmallestNumbers(numbers) {  
        const sortIt = numbers.sort( (a, b) => a <= b ? -1 : 1 );
        return sortIt[0] + sortIt[1];
  }

  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
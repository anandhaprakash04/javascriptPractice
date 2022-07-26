// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


fibonacci(55, undefined);

function fibonacci(num, memo) {
    console.log(1, num, memo);
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
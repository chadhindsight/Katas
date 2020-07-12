function fib(num) {
  var fibItr = function(a, b, num) {
    if (num === 0) return a;
    return fibItr(b, a + b, num - 1);
  };
  return fibItr(0, 1, num);
}
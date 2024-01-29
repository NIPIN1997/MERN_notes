function isPrime(n) {
  var flag = true;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
var n = 35;
var flag = isPrime(n);
if (flag) {
  document.write(`<h1>${n} is a prime number.</h1>`);
} else {
  document.write(`<h1>${n} is a composite number</h1>`);
}

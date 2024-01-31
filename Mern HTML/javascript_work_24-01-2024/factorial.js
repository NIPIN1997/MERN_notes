function factorial(n) {
  var product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
document.write(`<h1>Factorial of 5 : ${factorial(5)}</h1>`);

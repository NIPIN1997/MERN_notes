function checker(n) {
  if (n > 0) {
    return `${n} is a positive integer.`;
  } else if (n < 0) {
    return `${n} is a negative integer.`;
  } else {
    return `${n} is zero.`;
  }
}
document.write(`<h1>${checker(25)}</h1>`);
document.write(`<h1>${checker(-10)}</h1>`);
document.write(`<h1>${checker(0)}</h1>`);

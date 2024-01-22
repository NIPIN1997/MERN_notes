let i = 1;
do {
  if (i % 5 == 0 && i % 3 == 0) {
    document.write("<h1>FizzBuzz</h1>");
  } else if (i % 5 == 0) {
    document.write("<h1>Buzz</h1>");
  } else if (i % 3 == 0) {
    document.write("<h1>Fizzz</h1>");
  } else {
    document.write(`<h1>${i}</h1>`);
  }
  if (i == 100) {
    break;
  }
  i++;
} while (true);

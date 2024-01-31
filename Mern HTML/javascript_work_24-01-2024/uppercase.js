function uppercaseConverter(str) {
  var str1 = "";
  str1 += str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (
      str.charAt(i - 1) == "" ||
      str.charAt(i - 1) == " " ||
      str.charAt(i - 1) == "," ||
      str.charAt(i - 1) == "."
    ) {
      str1 += str.charAt(i).toUpperCase();
    } else {
      str1 += str.charAt(i);
    }
  }
  return str1;
}
document.write(
  `<h1>Converting sentence to title case "my name is nipin j george. i am 26 years old." : ${uppercaseConverter(
    "my name is nipin j george. i am 26 years old."
  )}</h1>`
);

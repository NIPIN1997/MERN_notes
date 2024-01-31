function reverseString(str) {
  var revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str.charAt(i);
  }
  return revstr;
}
document.write(`<h1>The reverse of hello : ${reverseString("hello")}</h1>`);
document.write(`<h1>The reverse of apple : ${reverseString("apple")}</h1>`);
document.write(`<h1>The reverse of mango : ${reverseString("mango")}</h1>`);

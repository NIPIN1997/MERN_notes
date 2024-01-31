function reverseSentence(str) {
  var arr1 = str.split(" ");
  var str1 = "";
  let s = "";
  for (let i = 0; i < arr1.length; i++) {
    for (let j = arr1[i].length - 1; j >= 0; j--) {
      s = s + arr1[i].charAt(j);
    }
    str1 = str1 + s + " ";
    s = "";
  }
  return str1;
}
document.write(
  `<h1>The reverse of the sentence is "My name is Nipin J George : ${reverseSentence(
    "My name is Nipin J George".toLowerCase()
  )}"</h1>`
);

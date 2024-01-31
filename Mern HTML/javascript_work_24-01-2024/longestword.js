function longestWordFinder(str) {
  var str1 = str.split(" ");
  var longestWord = "";
  var len = longestWord.length;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].length > len) {
      longestWord = str1[i];
      len = str1[i].length;
    }
  }
  return longestWord;
}
document.write(
  `<h1>The longest word in the sentence "My name is Nipin J George and I am from Thiruvananthapuram" ::-- ${longestWordFinder(
    "My name is Nipin J George and I am from Thiruvananthapuram"
  )}</h1>`
);

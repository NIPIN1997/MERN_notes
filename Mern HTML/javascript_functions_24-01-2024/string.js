var str="Hello World! Good Morning";
console.log(`String: ${str}`);
console.log(`Length of string = ${str.length}`);
var ch=str.charAt(6);
console.log(`Character at index position 6: ${ch}`);
console.log(`String in uppercase : ${str.toUpperCase()}`);
console.log(`String in lowercase : ${str.toLowerCase()}`);
var str1="welcome";
console.log(`Concatenation: ${str.concat(" ",str1)}`);
console.log(`Index position of G in string: ${str.indexOf('G')}`);
console.log(`Index position of World in string: ${str.indexOf('World')}`);
console.log(`Checking if character 'y' exists in the string: ${str.indexOf('y')}`);
console.log(`Slicing word "Good" from the string: ${str.slice(13,17)}`);
console.log(`Extracting word Morning from ${str}: ${str.substring(18,str.length)}`)
var str2="    Hello  World      ";
console.log(`String: ${str2}`);
console.log(`After trimming: ${str2.trim()}`)
console.log(`Splitting ${str} using character 'o' : ${str.split('o')}`);
var str3="hello world hello good morning hello";
console.log(`String: ${str3}`);
console.log(`Replacing first "hello" in ${str3} with "welcome" : ${str3.replace("hello","welcome")}`);
console.log(`Replacing all "hello" in ${str3} with "welcome" : ${str3.replaceAll("hello","welcome")}`);
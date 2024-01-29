var arr1=["apple","orange","mango"];
var arr2=["potato","carrot","cabbage","cauliflower"];
console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);
arr1.push("pineapple");
console.log(`Array 1 after push(): ${arr1}`);
arr1.pop()
console.log(`Array 1 after pop(): ${arr1}`);
console.log(`Index of "orange" in Array 1: ${arr1.indexOf("orange")}`);
console.log(`The value at index position 2 in Array 2: ${arr2[2]}`);
arr1.splice(0,1);
console.log(`Removing element "apple" from Array1: ${arr1}`);
console.log(`Combining Array 1 and Array 2: ${arr1.concat(arr2)}`);
console.log(`Array 1: ${arr1}`);
console.log(`Array 1 after reverseing: ${arr1.reverse()}`);
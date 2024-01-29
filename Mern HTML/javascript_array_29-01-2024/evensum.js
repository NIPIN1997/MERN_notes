// 1. Looping through an Array:

// Write a JavaScript function that takes an array of numbers and returns the sum of all even numbers in the array
function addition(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            sum+=arr[i];
        }
    }
    return sum;
}
var arr=[1,2,3,4,5,6,7,8,9];
console.log(`Array : ${arr}`);
console.log(`Sum of even numbers in the array: ${addition(arr)}`);
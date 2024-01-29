// 2. Loop and Update:

// Write a program that takes an array of numbers and updates each element to be its square if it is even and its cube if it is odd.

function updateLoop(arr){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            arr[i]=arr[i]**2;
        }
        else
        {
            arr[i]=arr[i]**3;
        }
    }
    return arr;
}
var arr=[1,2,3,4,5];
console.log(`Array : ${arr}`);
console.log(`Array after updation: ${updateLoop(arr)}`);
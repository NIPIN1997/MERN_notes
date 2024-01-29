// 3. Given an array of strings, write a function to filter out strings with a length less than or equal to 3.

function filter(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].length<=3)
        {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
var arr=["train","car","van","truck", "my"];
console.log(`Array : ${arr}`);
console.log(`Array with words having 3 or less number of characters: ${filter(arr)}`);
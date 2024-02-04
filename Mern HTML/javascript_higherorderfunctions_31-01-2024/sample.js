var a=[];
function primeChecker(i)
{
    let flag=true;
    if(i==1)
    {
        flag=false;
    }
    else
    {
        
        for(let j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                flag=false;
            }
        }
    }
    if(flag)
    {
        return i;
    }
}
for(let i=1;i<=50;i++)
{
    a.push(i);
}
console.log("Original array :");
console.log(a);
var b=a.map(element=>element**2);
console.log("Array of squares :");
console.log(b);
var c=a.filter(primeChecker);
console.log("Array of prime numbers :");
console.log(c);
let initialValue=0;
var sum=a.reduce((accumulator,element)=> accumulator+element,initialValue);
console.log(`Sum = ${sum}`);
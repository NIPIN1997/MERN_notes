const add=(a,b)=>a+b;
const subtract=(a,b)=>{
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    return a-b;
}
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;
console.log(`5 + 3 = ${add(5,3)}`);
console.log(`5 - 1 = ${subtract(5,1)}`);
console.log(`4 * 2 = ${multiply(4,2)}`);
console.log(`4 / 3 = ${divide(4,3)}`);
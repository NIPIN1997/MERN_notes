function sum(a,b,callback){
    let sum=a+b;
    callback(a,b,sum);
}
const display=(a,b,sum)=>console.log(`${a} + ${b} = ${sum}`);
sum(5,3,display);
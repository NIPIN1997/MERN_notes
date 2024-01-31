const arr1=[1,2,3,4,5,6,7,8,9,10];
const initialValue=0;
const sum=arr1.reduce(
    (accumulator, elem)=>{
        console.log(`accumulator = ${accumulator} , element = ${elem}`);
        return accumulator+elem;
    },initialValue
);
console.log(`Sum = ${sum}`);
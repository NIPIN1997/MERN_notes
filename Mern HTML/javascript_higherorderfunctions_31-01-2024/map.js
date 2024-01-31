const arr1=[1,2,3,4,5,6,7,8,9,10];
const squares=arr1.map(
    (elem,index,arr)=>{
        console.log(`${elem} - ${index} - ${arr}`);
        return elem**2;
    }
)
console.log(squares);
const cubes=arr1.map(elem=>elem**3);
console.log(cubes);
function add(){
    var a=5;
    var b=3;
    var sum=a+b;
    console.log(`Sum = ${sum}`);
}
function subtract(a,b){
    var difference=a-b;
    console.log(`Difference = ${difference}`);
}
function multiply(a,b=1){
    var product=a*b;
    console.log(`Product = ${product}`);
}
function divide(a,b){
    var quotient=a/b;
    return quotient;
}
add();
subtract(5,2);
multiply(4);
var quotient=divide(5,2);
console.log(`Quotient = ${quotient}`);
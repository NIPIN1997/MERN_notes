function findAndDelete(searchItem, arr){
    var itemIndex=arr.indexOf(searchItem);
    if(itemIndex==-1)
    {
        return -1;
    }
    else
    {
        arr.splice(itemIndex,1);
        return arr;
    }
}
var arr=["orange","apple","mango","grapes"];
console.log(`Array : ${arr}`);
console.log(`Array after deletion: ${findAndDelete("apple",arr)}`);
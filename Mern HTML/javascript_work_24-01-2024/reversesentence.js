function reverseSentence(str){
    var str1="";
    for(let i=str.length-1;i>=0;i--)
    {
        str1=str1+str.charAt(i);
    }
    console.log(str1);
    return str1;
}
document.write(`<h1>The reverse of the sentence is "My name is Nipin J George : ${reverseSentence("My name is Nipin J George".toLowerCase())}"</h1>`)
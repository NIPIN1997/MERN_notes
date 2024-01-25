function vowelCount(str1){
    var str=str1.toLowerCase();
    var count=0;
    for(let i=0;i<str.length;i++)
    {
        let ch=str.charAt(i);
        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
        {
            count++;
        }
    }
    return count;
}
document.write(`<h1>Number of vowels in "Hello world. Good morning. Have a nice day." : ${vowelCount("Hello world. Good morning. Have a nice day.")}</h1>`);
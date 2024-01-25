function isPalindrome(str){
    var flag=true;
    var str0=str.toLowerCase();
    var str1=str0.replaceAll(" ","");
    var str2=str1.trim();
    for(let i=str2.length-1,j=0;i>=0;i--,j++)
    {
        if(str2.charAt(i)!=str2.charAt(j)){
            flag=false;
            break;
        }
    }
    return flag;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("12321"))
console.log(isPalindrome("race car"));

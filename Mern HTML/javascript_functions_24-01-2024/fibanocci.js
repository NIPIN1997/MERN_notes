function fibanocci(n){
    if(n==1)
    {
        console.log(0);
    }
    else if(n==2)
    {
        console.log(0);
        console.log(1);
    }
    else{
        console.log(0);
        console.log(1);
        var a=0;
        var b=1;
        var c=a+b;
        var i=3;
        while(i<=n)
        {
            console.log(c);
            a=b;
            b=c;
            c=a+b;
            i++;
        }
    }
}
fibanocci(10);
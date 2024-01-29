function largest(a,b,c){
    if(a==b||a==c||b==c)
    {
        return -1;
    }
    else if(a>b && a>c)
    {
        return a;
    }
    else if(b>a && b>c)
    {
        return b;
    }
    else
    {
        return c;
    }
}
document.write(`<h1>The largest of three numbers (14,33,33) : ${largest(14,33,33)}</h1>`);
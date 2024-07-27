let data;
let a=[];
let loginData=[];
function getData()
{
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        data=JSON.parse(this.responseText);
    }
    xhttp.open("GET","dummy.json",false)
    xhttp.send();
}
function loadData()
{
    getData()
    a=[...data.users]
}
$("#loginbtn").click(function(){
    let u=document.getElementById("username").value;
    let p=document.getElementById("password").value;
    let flag=true;
    for(let i=0;i<a.length;i++)
    {
        if(a[i].username===u)
        {
            flag=false;
            if(a[i].password===p)
            {
                window.location.href="successful.html";
            }
            else{
                window.location.href="sample12.html";
            }
        }
    }
    if(flag)
    {
        window.location.href="sample12.html";
    }
})
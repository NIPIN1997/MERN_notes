let data;
let a=[];
let loginData=[];
function getData()
{
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        data=JSON.parse(this.responseText);
    }
    xhttp.open("GET","data.json",false)
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
            console.log(a[i].password)
            flag=false;
            if(a[i].password===p)
            {
                window.location.href="accountpage.html";
            }
            else{
                window.location.href="homepage.html";
            }
        }
    }
    if(flag)
    {
        window.location.href="homepage.html";
    }
})
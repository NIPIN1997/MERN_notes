var count=5;
const timer=setInterval(()=>{
    let s=document.getElementById("timer");
    s.innerHTML=count;
    count--;
},1000)
setTimeout(()=>{
    var p=document.getElementById("para");
    p.innerHTML="Hello";
    clearInterval(timer);
},5000);


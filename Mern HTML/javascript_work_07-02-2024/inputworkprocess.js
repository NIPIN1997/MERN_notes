const inname=document.getElementById("name");
const display=document.getElementById("display");
inname.addEventListener("change",()=>{
    display.innerHTML=inname.value.toUpperCase();
})
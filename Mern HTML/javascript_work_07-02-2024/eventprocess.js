const heading=document.getElementById("heading");
heading.addEventListener("pointerover",()=>{
    heading.style.color="red";
});
heading.addEventListener("pointerleave",()=>{
    heading.style.color="blue";
});
heading.addEventListener("copy",()=>
{
    heading.style.color="green";
});
heading.addEventListener("dblclick",()=>{
    heading.style.color="chocolate";
})
heading.addEventListener("paste",()=>{
    heading.style.color="grey"
})

const body=document.getElementById("body");
const image=document.querySelector("img");
function mchange()
{
    body.setAttribute("class","morning");
    image.src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsNDUyNDU4MjUwODQtaW1hZ2Uta3R4cmFucGIuanBn.jpg";
    setTimeout(()=>{
        body.setAttribute("class","");
    image.src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg";
    },5000);
}
function echange()
{
    body.setAttribute("class","evening");
    image.src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg";
    setTimeout(()=>{
        body.setAttribute("class","");
    image.src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg";
    },5000);
}
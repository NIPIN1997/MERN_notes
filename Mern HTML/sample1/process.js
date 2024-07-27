async function datagetter()
{
    let response=await fetch("http://localhost:8080/students");
    let data=await response.json();
    console.log(data);

}
function display()
{
    datagetter();
}



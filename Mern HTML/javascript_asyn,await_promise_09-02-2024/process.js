const apilink="https://jsonplaceholder.typicode.com/posts/1";
async function fetchingapi()
{
    const result=await fetch(apilink);
    console.log(result);
    const data=await result.json();
    console.log(`Id = ${data.id}`);
}
function main()
{
    console.log("Fetch process started");
    fetchingapi();
    console.log("Fetch process ended");
}
main()
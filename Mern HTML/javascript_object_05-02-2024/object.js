const obj1={
    name:"Nipin",
    age:26,
    email:"nipin@gmail.com"
};

for(let key in obj1)
{
    console.log(`Key : ${key}`);
    console.log(`Value : ${obj1[key]}`);
}
const obj2=new Object();
obj2.name="John";
obj2.age=25;
obj2.email="john@gmail.com";

for(let key in obj2)
{
    console.log(`Key : ${key}`);
    console.log(`Value : ${obj2[key]}`);
}

function Object3(name,age,email)
{
    this.name=name;
    this.age=age;
    this.email=email;
}
const obj3=new Object3("George",25,"george@gmail.com");
for(let key in obj3)
{
    console.log(`Key : ${key}`);
    console.log(`Value : ${obj3[key]}`);
}

const obj4={
    name:"Jacob",
    age:25,
    display()
    {
        console.log(this.name);
        console.log(this.age);
    }
}
obj4.display();

function Object5(name,age)
{
    this.name=name;
    this.age=age;
    return {};
}
const obj5=new Object5("Mathew",20);
console.log(obj5);

function Object6(name,age)
{
    this.name=name;
    this.age=age;
    return 4;
}
const obj6=new Object6("Mathew",20);
console.log(obj6);
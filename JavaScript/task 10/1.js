//object destructure
const obj = {
    name:'elln',
    age: 20
}

const {name,age} = obj;

 console.log(name, age);



 const list = {
    name:'fin',
    age: 21
}

 function display({name,age}) {
    console.log(name,age);
 }

 display(list)


 //array destructure

const arr = [10,20,30,40];

const [a,b,c,d] = arr
console.log(a,b,c);


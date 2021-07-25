//1.
// const items = [{id: "juice", price: 50, quantity: 3}, {id: "cookie", price: 30, quantity: 9}, {id: "shirt", price: 880, quantity: 1}, {id: "pen", price: 100, quantity: 2}];

// const sumItems = () => {
// let sum = 0;
// items.forEach(function(item) {
//     let calculation = item.price * item.quantity;
//     sum += calculation;
// })
// console.log(sum);
// };
// sumItems();


//2.
// var data={
//     name : "saad",
//     email : "email",
//     password : "pass",
//     age : "age",
//     gender : "male",
//     city : "Karachi",
//     country : "Pakistan",
// }
// console.log("data.age is existing" + (Boolean(data.age)));
// console.log("data.country is existing" + (Boolean(data.country)));
// console.log("data.fullName is existing" + (Boolean(data.fullName)));



//3.
// function Person (person_name, person_age) {
//     this.name = person_name,
//     this.age = person_age,

//      this.greet = function () {
//         console.log('hello');
//     }
// }
// const person1 = new Person("saad",18);
// const person2 = new Person("ali", 12);
// console.log(person1.name);
// console.log(person2.name);




//4.
// var person_education = document.getElementById("education");
// var person_profession =document.getElementById("profession");
// var person_gender =document.getElementById("x","y");
// var person_address = "123,abc";
// function Census(person_name, person_gender, person_education, person_profession, person_address){
//     this.name = person_name,
//     this.age = person_gender,
//     this.education = person_education,
//     this.profession = person_profession,
//     this.address = person_address
// }
// const person1 = new Census("saad", person_gender, person_education, person_profession, person_address);
// const person2 = new Census("ali", person_gender, person_education, person_profession, person_address);
// const person3 = new Census("ammad", person_gender, person_education, person_profession, person_address);

// document.write(person1);
// document.write(person2);
// document.write(person3);
//Array.................................................................................................. 

//  const myArr = [0,1,2,3,4,5,'ankush','$','abhay']
// console.log(myArr[7]);

// const myArr1 = ["saktimaan", "spiderman", "batman"]
// console.log(myArr1.length);


// myArr.push(6)
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// const newArr = myArr.join
// console.log(typeof newArr);
 
// const marvel_heros = ["thor","Ironman","spiderman"]
// const dc_heros = ["superman", "flash", "batman"] // here this array is like an element so, this array is push as an element in marvel_heros array

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_newheros = [...marvel_heros, ...dc_heros]// spread operator is used to merge the two array
// console.log(all_newheros);

// console.log(Array.from("Ankush")); // this will convert string into array
// console.log(Array.isArray("Ankush"));// this check the element in array or array 
// console.log(Array.from({name: "Ankudh"}));// interesting 

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));
// console.log(Array.from(score1,score2,score3));// this will not form an array


//Objects...........................................................................................................

//object laterals
// const Jsuser ={
//     name: "ankush",
//     age:25,
//     location:"Ghaziabad",
//     email:"ankush@2311025.gmail.com"
// }

// console.log(Jsuser.age);// In most of the cases . is used to access the property of object or access the object 
// console.log(Jsuser["location"]);// this is called bracket notation , but in some or special cases we use bracket notation
// console.log(Jsuser.location);

// Jsuser.email = "ankush@chatgpt.com"
//console.log(Jsuser);

//Object.freeze(Jsuser)// it freeze the object so, it can't be changed
 
// Jsuser.age = 56

//console.log(Jsuser);

// Jsuser.greeting = function(){
//     console.log("Hello jsuser");
    
// }

// console.log(Jsuser.greeting());

// Jsuser.greetingTwo = function(){
//     console.log(`Hello Jsuser ,${this.name}`) ;// stringinterpulation (backticks is used)
    
// }
// console.log(Jsuser.greetingTwo());

//singleton

// const tinderruser = {}
// tinderruser.id = 123
// tinderruser.name = "ankush"
// tinderruser.age = 25
// tinderruser.location = "ghaziabad"

// // console.log(tinderruser);

// const obj1 = {
//     1: "a",
//     2:"g",
//     5:"h"
// }
// const obj2 ={
//     9:"y",
//     8:"i"
// }

// const obj3 = {...obj1,...obj2}// spread operator is used to merge two objects
// console.log(obj3);


// console.log(Object.keys(tinderruser));// it return the key of object in array data type.

const course = {
    coursename :"jshindi",
    price: 999,
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor} = course// it is also ios used to access the property of object like . but it is more cleaner and easy to read.
console.log(courseInstructor);

//



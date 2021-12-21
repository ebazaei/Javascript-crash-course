// const test = "hoi";
// console.log(test.substring(1,3).toUpperCase())

// const fruit1 = 'salam';
// const fruit = ['a1','a2','a3'];
// console.log(fruit[1]);
// fruit[3] = 'a4';
// fruit.push('a5');
// console.log(fruit);
// fruit[3] = 'a0';

// console.log(fruit);
// fruit.pop();
// console.log(fruit);
// console.log(Array.isArray(fruit))

// num = 1;
// for(let i=1; i <= 99 ; i=i+2){
//    console.log( num ,i) ;
//    ++num
// }
// console.log(num)

// const first  ='ehsan';
// var last= 'bazaei';
// console.log(first)

// console.log(`i am ${first} ${last}`)

// const person = { 
//     firstName: 'John', 
//     lastName: 'Doe', 
//     age: 40, 
//     hobbies: ['music', 'movies', 'sports'], 
//     address: { 
//         street: '50 main st', 
//         city: 'Boston', 
//         state: "MA"
//     }
// }

// const { firstName, lastName, address: { city }} = person; 
// console.log(person.age);

// const todos = [
//     {
//         id:1,
//         text: 'text A',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'text A',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'text A',
//         isCompleted: true
//     },
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// //constructor function
// function person(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); 
//         // this.getBirthYear = function(){
//         //     return this.dob.getFullYear();
//         // }
//         // this.getFullName = function(){
//         //     return `${firstName} ${lastName}`;
//         // }
// }
// person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear(); 
// }
// person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`; 
// }





// class person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); 
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`; 
//     }
// } 

// const person1 = new person('John', 'Doe', '4-3-1980');
// const person2 = new person('Mary', 'Smith', '3-6-1970');

// // console.log(person1.dob.getFullYear());
// console.log(person1.getFullName());
// console.log(person2);




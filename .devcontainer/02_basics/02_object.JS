// //singleton-> when we declare as literal then singeton not construct  and if construct while using constructor called singleton


// //object literals
// const mySym=Symbol("key1")//symbol creation access as key and print(note that it always access and declare in square braces)

// const Jsuser={
//     name:"mehar",//name act as string here
//     "full name":"Mehar Fatima",
//    [ mySym]:"myKey1",//symbol creation
//     age:20,
//     location :"lucknow",
//     email:"mehar@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Satuday"]
// }
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);//symbol access
// Jsuser.email="meharfatima0522@gmail.com"
// //Object.freeze(Jsuser)//it fixed the value that will not chnge later here meharfatima0522@gmail.com  is freezed
// Jsuser.email="meharchatgpt.com"
// console.log(Jsuser)

// Jsuser.greeting=function(){
//     console.log("hello JS USER");
    
// }
// console.log(Jsuser.greeting());

// objects part 2------------------------------------------------------------------------------------
//const tinderUser=new Object()//empty object or singleton
//console.log(tinderUser);
const tinderuser={}//non singleton object
 const tinderUser={}
 tinderUser.id="123"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false


// console.log(tinderUser);
//object in side object
const regularuser={
    email:"some.gmail.com",
    fullname:{
        userfullname:{
            firstname:"mehar",
            lastname:"fatima"
        }
    }
}
//console.log(regularuser.fullname?.userfullname)
// const obj1={1:"a",2:"b",c:"3"}
// const obj2={4:"d",5:"e"}
// // const obj3={
//     obj1,obj2
// //}
// const obj3=Object.assign({},obj1,obj2)//empty object is target here ewhere we are putting all object vakues

// const obj4={...obj1,...obj2}
// console.log(obj4)


// const user=[{
//     id:1,
//     email:"mskdsmdk"
// },
// {
//     id:1,
//     email:"mskdsmdk"
// },


// {
//     id:1,
//     email:"mskdsmdk"
// } , 
//  {
//     id:1,
//     email:"mskdsmdk"
// } ]
// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//convert into array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename="JS",
    price:"999",
    courseInstructor:"mehar"
    
}
const{courseInstructor :instructor}=course//here i rename the courseinstructor by only instructor
console.log(instructor);

const navbar=({company})=>{ //destructoring in react

}
navbar(company="mehar")

// {
   "name":"hitesh",
    "coursename":"JS",
    "price":"free"
// }






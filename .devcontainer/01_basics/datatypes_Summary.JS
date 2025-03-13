//primitive data type
//7 types:strings(call by value: chnges done in copy),Number,Boolean,Null,Undefined,Symbol,BigInt
 const score=100
 const scoreValue=100.3
 
 const outsideTemp=null
 let userEmail;
 const id=Symbol("123")
 const anotherId= Symbol("123")
 console.log(id===anotherId)
 const bigNumber=3456679088776655443222233n

//non primitive or reference type----
//Array,Objects,Function 
const heros=["shaktiman","naagraaj","ironman"]
let myobj={

    name:"mehar",
    age: 20,
}
const myFunction= function() {
    console.log("Hello World");
}
console.log(typeof myFunction)

// stack (primitive type),heap memory(non-primitive)
let myYoutubename="mehardotcom"
let anothername="samardotcom"
console.log(myYoutubename)
console.log(anothername)

let userOne ={
    email:"user@google.com",
    upi:"mehse@mvcom"
}
let userTwo =userOne
userTwo.email="mejharj@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


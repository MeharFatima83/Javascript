// //this refer the current context
// const user={
//     username:"mehar",
//     price: 999,
//     welcomeMessage:function(){
//      console.log(`${this.username},welcome to website`);
//      //console.log(this);
     
     
//     }

// }
// //  user.welcomeMessage()
// //  user.welcomeMessage="sam"
// //  user.welcomeMessage()
// console.log(this)
//object inside browser is window object that's why we capture all events of windows such as click

// function chai(this){
//     console.log(this);
    
// }
// chai()
// const chai = () => {
//     let username="mehar"
//        console.log(this);
        
     //}
//chai()
//if we are wrapping in curly braces then should write return keyword we are writing explicitely 
// const addTwo=(num1,num2)=>{
//     return num1+num2

// }
//if wrap in curlybraces then not need to write return keyword ----> const addTwo=(num1,num2)=> (num1+num2)
//implicit return does not need paranthesis
// const addTwo=(num1,num2)=> num1+num2
//when we have to return object-
//it will not run when we only apply {} for objects we also have to wrap in brackets ----->const addTwo=(num1,num2)=> {username:"mehar"}
const addTwo=(num1,num2)=> ({username:"mehar"})

console.log(addTwo(3,4))



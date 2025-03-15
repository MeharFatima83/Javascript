
// function myname(){
//     console.log("m")
//     console.log("e")
//     console.log("h")
//     console.log("a")
//     console.log("r")
//     console.log("m")

// }
// // myname()
// function addTwo(num1,num2)//parameter
// {
 
//  //console.log(num1+ num2)//arguments
//  //let result=num1+num2
//  //return result
//  return num1+num2
//  }
// const result=addTwo(4,7)
// console.log("Result: ",result);
// function loginUserMessage(username="sam")//default value sam is given if any value is nit given then it taken
// {
//     if (username===undefined){
//         console.log("enter user name please");
//         return
        

//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserMessage("mehar"))
// console.log(loginUserMessage())//if pass any value then default value will be overwritten
function calculateCartPrice(val1,val2,...num1)//...3 dots are called rest operator and spread operator depend upon the usage here called rest operator(it collect all data in bundle)
{
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))//val1 contain 200 val2 contain 400 and rest values in array
const user={
    username:"mehar",
    price:200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

    
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));




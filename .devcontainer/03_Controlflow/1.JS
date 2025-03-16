  const isUserloggedIn=true
  const temperature=42
  if(temperature<50){
    console.log("less than 50");
    
  }
  if(isUserloggedIn){

}
const score=200
if (score>100){
    const power="fly"
    console.log(`user power:${power}`);
    
}
// const balance=1000
// if (balance>500) console.log("test"),
// console.log("test2");


const UserloggedIn=true
const debitCard =true
const loggedInFromEmail =true
const loggedInFromGoogle =true

if (UserloggedIn&& debitCard){
    console.log("allow to buy course");
    
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("allow to buy course");
    
}//----------------------------------SWITCH-----------------swt
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//break breaks the control flow once value get matched it will not allow to execute after break except default
const month="april"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    case "june":
        console.log("June");
        break;
    case "july":
        console.log("July");
        break;

    default:
        console.log("default case match");
        
        break;
}
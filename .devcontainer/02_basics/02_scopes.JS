// var c=300
// let a=300
//  if(true){
//     let a=10
//     const b=20
//     var c=30//value will convert from 300 to 30 cause it redeclare so it will cause trouble

// }
// //var ->global scope its value will acess inside the if block


// // console.log(a);
// // console.log(b);
// console.log(c);
// let a=300
// if (true){
//     let a=10
//     const b=20
//     console.log("Inner: ",a);
// }
// console.log(a);
function one(){
    const username="mehar"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
    
}
//one()
if(true){
    const username="mehar"
    if(username==="mehar"){
        const website=" youtube"
        //console.log(username+ website);
        
    }
    //console.log(website);
    
}
//console.log(username);
//+++++++++++++++++++++++++++++++intresting++++++++++++++++++++++++

//technique of function
console.log(addone(5)) // it can call before declaration
function addone(num){
  return num+1
}

//2nd technique
console.log(addTwo(5))//it cant
const addTwo=function(num){
    return num +2
}
//arrow function-------------------------->
//this function told the



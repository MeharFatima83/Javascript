// const userEmail="meharmdm.dd"//here string consider as truthy value if we dont give any string then it not have any value
// if(userEmail){
//     console.log("got email");
    
// }else{
//     console.log("not have");
    
//}
const userEmail=[]//here array consider as truthy value if we dont give any value in array then also consider having some value 
// e
if(userEmail){
    console.log("got email");
    
}else{
    console.log("not have");
    
}
//truthy value
//"0","false"," ",[],function(){}
//falsyy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//to check empty array
if (userEmail.length===0){
    console.log("array is empty");
    
}
//to check empty object
const emptyObj={}
if(Object.keys(emptyObj).length===0){
 console.log("object empty");
 
}
//NUllish Coalescing Operator (??):null undefined
let val1;
//val1=5??10
//val1=null?? 10
val1=undefined ?? 15
console.log(val1);
//null and  undefined are used for safity check when two value come from the database
val2=null ?? 10 ??1090//consider  firstvalue which is after null or undefines
console.log(val2);

//terniary operator
//condition?true:false
const iceprice=100
iceprice<=80?console.log("less tyan 80"):console.log("more than 80");



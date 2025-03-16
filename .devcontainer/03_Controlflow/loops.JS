//for 
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best");
        
//     }
//     //console.log(element);
    
    
// }
// for (let i = 0; i <= 10; i++) {
//    // console.log(`outer loop:${i}`);
    
//     for (let j = 0; j <= 10 ; j++) {
//         //console.log(`outer loop:${j} and inner loop ${i}`);
// //console.log(i+ '*'+ j + '=' + i*j);

        
        
//     }
    
// }
// let myarr=["flash","batmn","superman"]
// console.log(myarr.length);

// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element);
    
    
// }
//break and continue
// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
// }
// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//     continue
        
//     }
//     console.log(`value of i is ${index}`);
    
// }
//whike loop------------------
// let index=0
// while(index<= 2){
//     console.log(`value of index ${index}`);
//     index=index+2
    

// }
// let myar2 = ["flash","superman","ironman"]
// let arr = 0
// while(arr< myar2.length){
//     console.log(`value is ${myar2[arr]}`);
//     arr= arr + 1
    
// }
//do while----------------------
// let score=11
// do{
// console.log(`score is ${score}`);
// score++

// }while(score<=10);




//for of loop-----------------------------------------------------
// ["","",""]
// [{},{},{}]
// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
    
// }
// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`each car is ${greet}`);
    
    
// }
//MAP-------------------------------------------------connection of key value pair dont have any duplicate value

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"france")
console.log(map);
for (const [key,value] of map){
    console.log(key,':-',value);
    
}
const myObject ={
    'game1' : 'NFS' ,
    'game2' :'Spiderman'
}
// for (const [key,value] of map){
//     console.log(key,':-',value);
    
// }


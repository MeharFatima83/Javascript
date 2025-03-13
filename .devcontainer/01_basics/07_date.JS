
// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// date is object
// let myCreateDate =new Date (2025,0,13 ,5,3)
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())
// // mm-dd-yy syntax
// let myNewDate= new Date ("03-13-2025")
// console.log(myNewDate)
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myNewDate.getTime())
// console.log(Math.floor(Date.now()/1000))
let newDate= new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);//month startr from 0 so we add 1 here so that user dont get confuse
`${newDate.getDate()} and the time $.get`
newDate.toLocaleDateString('default',{weekday:"long"})



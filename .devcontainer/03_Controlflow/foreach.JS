// // const coding=["js","rb","py","php"]
// // coding.forEach(  function (item){

// // })
// // // coding.forEach( (item)=>{
// // //     console.log(item);
    
// // // })
// // function printMe(item){
// //     console.log(item);
    
// // }
// // coding.forEach(printMe)
// // // coding.forEach((item)=>
// // // {console.log(item,index,arr);
// // // })
// // const myCoding=[
// //     {
// //         languageName:"javascript",
// //         languageFileName:"js"
// //     },
// //     {
// //         languageName:"java",
// //         languageFileName:"java"
// //     },
// //     {
// //         languageName:"python",
// //         languageFileName:"py"
// //     },
// // ]
// // myCoding.forEach( (item)=>{
// //     console.log(item);
    
// // })
// //---------------------------------->
// const coding=["js","rb","py","php"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })

// console.log(values);


// //for each loop does not return anything

// const myNums=[1,2,3,4,5,67,7,8,9]
//  const newNums=myNums.filter((num)=>num>4)
//  console.log(newNums);
//  //by for each loop
//  const newnum2=[1,2,3,4,5,67,7,8,9]
//  newnum2.forEach((num)=>{
//     if(num>4){
//         newnum2.push(num)
//     }

//  })

 const book=[
    { title:'book one',genre:'Fiction',publish:1981,edition:2004},
    { title:'book two',genre:'Fiction',publish:1983,edition:2007},
    { title:'book three',genre:'History',publish:1986,edition:2007},
    { title:'book four',genre:'History',publish:1985,edition:2004},
    { title:'book five',genre:'Fiction',publish:1981,edition:2013},
    { title:'book six',genre:'science',publish:1982,edition:2013},
    { title:'book seven',genre:'science',publish:1981,edition:2004},
    { title:'book eight',genre:'science',publish:1967,edition:2006},
    { title:'book nine',genre:'Non-Fiction',publish:1961,edition:2009},
    { title:'book ten',genre:'Non-Fiction',publish:1991,edition:2009},
    { title:'book eleven',genre:'Maths',publish:1921,edition:2010},
    { title:'book twelve',genre:'Maths',publish:1941,edition:2010},
    { title:'book thirteen',genre:'Fiction',publish:1947,edition:2004},
 ];
//  const userbooks=book.filter((bk)=> bk.genre='History')
//  console.log(userbooks);
//   
 const userbooks=book.filter((bk)=>bk.publish>=1930 && bk.genre==='Maths')
 console.log(userbooks);
 

















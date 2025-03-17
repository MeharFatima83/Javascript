const myNums=[1,2,3,4,45,5,677,8,9]
// const newNums= myNums.map((num)=> num + 10 )
// console.log(newNums);
const newNums=myNums
.map((num)=>num * 10)
.map((num)=>num + 1)
.filter((num)=>num >=40)


console.log(newNums);
//--------------------->reduce method
// const myno=[1,2,3]
// const myTotal=myno.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc +currval
    
    
// },0)
// console.log(myTotal);
//reduce methiod in arrow function---->
const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"mobile dev course",
        price:5999
    },

    {
        itemName:"JS COURSE",
        price:4000
    },

    {
        itemName:"Py course",
        price:4099
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=> acc+ item.price,0)
console.log(priceToPay);





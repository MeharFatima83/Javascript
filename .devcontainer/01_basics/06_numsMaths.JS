const score=400
console.log(score);
const balance= new Number (100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber=3243.4455
console.log( otherNumber.toPrecision(1));
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//it adds comma acc to indian system
//maths------------------------------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.round(4.6));
console.log(Math.max(4,5,6,4,8,6));
console.log(Math.min(4,6,4,-3));

console.log("random");//gives values between 0 to 1 could be 0.0,0.1,0.2222

console.log(Math.random());
console.log((Math.random()*10)+1);//we multiply by 10 so value shift by 1 if value shift and 0.82 to 8.2 and it could be that after multiply  by 10 the value could be 0.0 so for removal of this we add 1
const min =10//sometimes we have to define the range of min and max  so we apply this formula and add min in last 
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)









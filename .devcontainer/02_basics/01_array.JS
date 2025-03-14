// //array
const myArr=[1,4,5,3,7,5]
// console.log(arr[0]);
// const heros=["marvel","captain america"]
const arr2=new Array(3,4,5,6)
// console.log(arr2[4]);//when we access element which is not present in array it displays undefined
// //methods
// arr2.push(78,67)
// arr2.pop()//when we dont give any value then it remove the elements from last
// // console.log(arr2)
// // arr2.pop(5)
// //console.log(arr2);
// arr2.unshift(9)//add the num in the start
// console.log(arr2);
// arr2.shift()//remove the num in the start that was added by shift
// console.log(arr2.includes(3));
// console.log(arr2.indexOf(-1));
// const newArray=arr2.join()
// console.log(arr2);
// console.log(typeof newArray);
//slice

console.log("A",myArr)
const myn1=myArr.slice(1,3)//does not include last element
console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)//modified oroginal array (1,3->remove 3 elements after 1)
console.log("C",myArr);

console.log(myn2)
//////////////////////////////////////////////////
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]//in js array can take any type of data could be array also
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
// let Allheros=   marvel_heros.concat(dc_heros)
// console.log(Allheros);
//spread operator-----------------
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);









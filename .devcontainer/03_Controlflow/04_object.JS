const myobj={
    js:"javascript",
    cpp: "c++",
    rb:"ruby",
    swift : "swift by apple"
}
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
    
    
}
const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming [key]);
    
}
const map = new Map()
map.set('IN',"India")
map.set('USA',"United Stated")
map.set('Fr',"France")
map.set('Aus',"Australia")
for (const key in map) {
    console.log(key);
   
}
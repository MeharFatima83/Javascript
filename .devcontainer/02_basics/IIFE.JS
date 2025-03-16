//Immediately Invoked Function Expression (IIFE)---->JO FUNCTION IMEDIATELY  
//GLOBAL SCOPE KE POLLUTION SE PRBLM HOTI HAI KAI BAR TO USS GLOBAL SCOPE KE VARIABLE YA JO BHI DECLARE HAI WHA USKE POLLUTION KO HTANE KE LIYE HUMNE IIFE KA USE KIYA
(function chai(){
   //named IIFE
    console.log(`DB CONNECTED`);
    
})();
//when have to write 2 consequite IIFE then seperate by semicolon otherwise it will not run
(  (name)=>{
    console.log(`DB CONNECTED to ${name}`);

})('mehar')
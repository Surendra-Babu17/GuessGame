let arr = ["1","2","3","4"]; 
let index = Math.floor(Mathrandom()*arr.length); 

let stystem_generated=arr[index]  
let chance=0
function click(){
    chance ++;
   let ele=document.getElementById("input")
   if(ele.value==stystem_generated){
    if(chance==1){
        alert("your answer is correct you won the Got gold medal")

    }else if(chance==2){
        alert("your answer is correct you won the Got silver medal")
    }else if(chance==3){
        alert("your answer is correct you won the Bronze medal")
    }else{
        alert("your answer is correct you try again to get medal medal")
    }
    

   }
}
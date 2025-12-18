let button = document.getElementById("idforbutton")
let password = document.getElementById("idforpassword")

function createPassword(){
password.textContent = ""
for(i = 1 ; i<=8 ; i++){
 
      const randomCharList = [
         "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","a","b","c","d",
         "e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","y","z",
         0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
   let randomCharIndex = Math.floor(Math.random() * randomCharList.length)
   let randomChar = randomCharList[randomCharIndex]
   console.log(randomChar)
   password.textContent += randomChar                                   
   

   

}

}
   


button.addEventListener("click",createPassword)
   


   
   
   


/*
username → string

password → string

age → number

email → string veya null

isBanned → boolean
 */

const userName = "hrn.mtn";
const password = "kfrni5j4";
let age = 122;
const email = "";
let isBanned = false;

if(isBanned){
  console.log("Kayit yapilamaz");
  
}
else{
  if(userName === null){
    console.log("Kullanici adi girilmedi");
    
  }
  else{
    if(password.length < 8){
      console.log("Şifre çok kisa");
      
    }
    else{
      if(age == undefined){
        console.log("yas girilmedi");
        
      }
      else{
        if(age<18){
          console.log("Yaş yetersiz");
          
        }
        else{
          if (email === "") {
            console.log("Email zorunlu");
            
          }
          else{
            console.log("KAYIT BASARILI");
            
          }
        }
      }
      
        
      
    }
  }
}
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxEl_1=document.getElementById("box1")
let boxEl_2=document.getElementById("box2")

let password1=""
let password2=""

function generate(){
    for (let i = 1; i <= 15; i++) {
        let random1=Math.floor(Math.random()*characters.length)
        let random2=Math.floor(Math.random()*characters.length)
        
        password1+= characters[random1]
        password2+= characters[random2]
    }
    boxEl_1.textContent=password1
    boxEl_2.textContent=password2
    password1=""
    password2=""
}

function reset(){
    boxEl_1.textContent="password 1"
    boxEl_2.textContent="password 2"
    password1=""
    password2=""
}


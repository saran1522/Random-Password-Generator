let boxEl_1=document.getElementById("box1")
let boxEl_2=document.getElementById("box2")
let inpEl=0
let password1=""
let password2=""

const upperStr ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerStr="abcdefghijklmnopqrstuvwxyz"
const numsStr="1234567890"
const symbolsStr="`~!@#$%^&*()_-+=[]\{}|;':,./<>?"

const getLower=()=>{
    const ind= Math.floor(Math.random()*lowerStr.length);
    return lowerStr[ind]
}
const getUpper=()=>{
    const ind= Math.floor(Math.random()*upperStr.length);
    return upperStr[ind]
}
const getNums=()=>{
    const ind= Math.floor(Math.random()*numsStr.length);
    return numsStr[ind]
}
const getSymbol=()=>{
    const ind= Math.floor(Math.random()*symbolsStr.length);
    return symbolsStr[ind]
}

function generate(){
    inpEl=+document.getElementById("inp-el").value;

    const hasLower=document.getElementById('lower-check').checked
    const hasUpper=document.getElementById('upper-check').checked
    const hasNums=document.getElementById('nums-check').checked
    const hasSymbol=document.getElementById('symbol-check').checked

    for (let i = 1; i <= inpEl; ++i) {
        if(hasLower)
            password1+=getLower()
        if(hasUpper)
            password1+=getUpper()
        if(hasNums)
            password1+=getNums()
        if(hasSymbol)
            password1+=getSymbol()
    }

    if(inpEl===0)
    {
        boxEl_1.textContent=" "
        boxEl_2.textContent=" "
    }
    else
    {
        password1=password1.slice(0,inpEl)
        boxEl_1.textContent=password1
        password2=password1.split("").reverse().join("");
        boxEl_2.textContent=password2
    }
    password1=""
    password2=""
}

function reset(){
    boxEl_1.textContent="password 1"
    boxEl_2.textContent="password 2"
    password1=""
    password2=""
    inpEl.textContent=0
}


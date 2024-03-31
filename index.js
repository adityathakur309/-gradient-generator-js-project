let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".copy");
let code1;
let code2;
let hexGenerate = () => {
    let hexValue = "0123456789abcdef";
    let colorCode = "#";
    for(let i = 0; i<6; i++){
        colorCode += hexValue[Math.floor(Math.random() * hexValue.length)]
    }
    return colorCode;

}
let buttonhandler1 = () => {
 code1 = hexGenerate();
    document.body.style.background = `linear-gradient(to right, ${code1}  , ${code2})`
copyDiv.innerHTML = `background: linear-gradient(to right, ${code1} , ${code2})`
btn1.innerText = `${code1}`

    
}
let buttonhandler2 = () => {
 code2 = hexGenerate();
 copyDiv.innerHTML = `background: linear-gradient(to right, ${code1} , ${code2})`
 document.body.style.background = `linear-gradient(to right, ${code1}  , ${code2})`
 btn2.innerText = `${code2}`
}
let copied = () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("you have been copied this code")
}

btn1.addEventListener("click", buttonhandler1)
btn2.addEventListener("click", buttonhandler2)
copyDiv.addEventListener("click",copied)
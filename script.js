



const convertButton = document.querySelector("#main-button")
console.log(convertButton)


function convertValues(){
    const input= document.querySelector(".input-currency").value
    const dolar= 5.1

const convertDolar= input / dolar

console.log(convertDolar)
}


convertButton.addEventListener("click", convertValues)


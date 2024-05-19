



const convertButton = document.querySelector("#main-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const input = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    const currencyValueConverted = document.querySelector(".currency-value") 

    console.log(currencySelect.value)

    const dolar = 5.10
    const euro = 5.56



    if(currencySelect.value == "Dolar") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input/dolar)
    }

    if(currencySelect.value == "Euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(input/euro)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)


}


convertButton.addEventListener("click", convertValues)


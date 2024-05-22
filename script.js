



const convertButton = document.querySelector("#main-button")
const selectCurrency = document.getElementById("converte-currency")
const currencySelect = document.querySelector(".currency-select")






async function convertValues() {
    const input = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)


    const data = await fetch("https://cdn.moeda.info/api/latest.json").then(response => response.json())

    console.log(data)

    const dolarBRL = data.rates.BRL
    const dolarUSD = data.rates.USD
    const dolarEUR = data.rates.EUR
    const libraGPB = data.rates.GBP
    const bitcoinBTC = data.rates.BTC
    const currencysName = document.querySelector(".word-1")
    const currencysimag = document.querySelector(".currency-imag")

    if (selectCurrency.value == "real") {
        currencysName.innerHTML = "Real"
        currencysimag.src = "./assets/brasil 2.png"


        if (currencySelect.value == "Dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input / dolarBRL)
        }


        if (currencySelect.value == "Euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input / (dolarBRL / dolarEUR))
        }

        if (currencySelect.value == "Libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input / (dolarBRL / libraGPB))
        }

        if (currencySelect.value == "Bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(input / (dolarBRL / bitcoinBTC))
        }

        if (currencySelect.value == "Real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }

    if (selectCurrency.value == "dolar") {
        currencysName.innerHTML = "Dolar americano"
        currencysimag.src = "./assets/estados-unidos (1) 1.png"




        if (currencySelect.value == "Dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input)
        }

        if (currencySelect.value == "Euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input * dolarEUR)
        }

        if (currencySelect.value == "Libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input * libraGPB)
        }

        if (currencySelect.value == "Bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(input * bitcoinBTC)
        }

        if (currencySelect.value == "Real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(dolarBRL * input)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input)
    }

    if (selectCurrency.value == "euro") {
        currencysName.innerHTML = "Euro"
        currencysimag.src = "./assets/euro.png"


        if (currencySelect.value == "Dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input / dolarEUR)
        }

        if (currencySelect.value == "Euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input)
        }

        if (currencySelect.value == "Libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input / (dolarEUR / libraGPB))
        }

        if (currencySelect.value == "Bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(input / (dolarEUR / bitcoinBTC))
        }

        if (currencySelect.value == "Real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / (dolarEUR / dolarBRL))
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input)
    }

    if (selectCurrency.value == "libra") {
        currencysName.innerHTML = "Libra"
        currencysimag.src = "./assets/libra 1.png"

        if (currencySelect.value == "Dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input / (libraGPB / dolarUSD))
        }

        if (currencySelect.value == "Euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input / (libraGPB / dolarEUR))
        }

        if (currencySelect.value == "Libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input)
        }

        if (currencySelect.value == "Bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(input / (libraGPB / bitcoinBTC))
        }

        if (currencySelect.value == "Real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / (libraGPB / dolarBRL))
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input)
    }

    if (selectCurrency.value == "bitcoin") {
        currencysName.innerHTML = "Bitcoin"
        currencysimag.src = "./assets/bitcoin 1.png"

        if (currencySelect.value == "Dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input / (bitcoinBTC / dolarUSD))
        }

        if (currencySelect.value == "Euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input / (bitcoinBTC / dolarEUR))
        }

        if (currencySelect.value == "Libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input / (bitcoinBTC / libraGPB))
        }

        if (currencySelect.value == "Bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(input)
        }

        if (currencySelect.value == "Real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / (bitcoinBTC / dolarBRL))
        }
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(input)
    
    }

}










function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")




    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()

    console.log("trocou de moeda")
}





currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

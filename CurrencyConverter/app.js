const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"


const dropdowns = document.querySelectorAll('.dropdown select')
const button = document.querySelector('button')
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector('.msg')

for(let select of dropdowns){
    for (currCode in countryList){
        // console.log(code, countryList[code])
        let newOption = document.createElement('option')
        newOption.innerText = currCode
        newOption.value = currCode
        if(select.name == "From" && currCode == "USD"){
            newOption.selected = "selected"
        }else if(select.name == "To" && currCode == "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption)
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (element) => {
    // console.log(element)
    let currCode = element.value
    // console.log(currCode)
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img')
    img.src = newSrc
}

button.addEventListener('click', async(evt) => {
    evt.preventDefault()
    let amount = document.querySelector('.amount input')
    let amountValue = amount.value
    // console.log(amountValue)
    if(amountValue == "" || amountValue <= 0){
        alert("Please enter a valid amount")
        return
    }

    // console.log(fromCurr.value, toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`
    let response = await fetch(URL)
    let data = await response.json()
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
    // console.log(rate)
    // console.log(data)
    let finalAmount = amountValue * rate
    // console.log(finalAmount)
    msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})
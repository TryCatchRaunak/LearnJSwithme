//API- Application programming interface

/* Examples of APIs*/

const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
const factPara = document.querySelector('#fact')
const btn = document.querySelector('#btn')


const getImages = async() => {
    let response = await fetch(URL)
    console.log("getting data...")
    console.log(response)//JSON format
    console.log(response.status)
    console.log(response.type)
    let data = await response.json()
    console.log(data)
    console.log(data[0])
    factPara.innerText = data[0].text
}

btn.addEventListener('click', getImages)


// console.log(getImages())



//AJAX - Asynchronous Javascript and XML
//JSON - JavaScript Object Notation
//AJAJ - Asynchronous Javascript and JSON

//XML is replaced by JSON
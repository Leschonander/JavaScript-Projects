const search = document.querySelector('input[type="text"]')
const submit = document.querySelector('#submit') //search.value
const container = document.querySelector('#beer')

submit.addEventListener('click', loadBeers)

function loadBeers(){
    let value = search.value
    console.log(value)
    let url = `https://api.punkapi.com/v2/beers?beer_name=${value}`

    async function getData(){
        let response = await fetch(url)
        let data = await response.json()
        return data;
    }
    getData()
     .then(data => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (let i = 0; i < data.length; i++) {
            h3 = document.createElement('h3')
            h3.textContent = data[i]['name']

            img = document.createElement('img')
            img.src = data[i]["image_url"]

            pInfo = document.createElement('p')
            pInfo.textContent = `ABV: ${data[i]["abv"]} IBU: ${data[i]["ibu"]}`

            div = document.createElement('div')
            div.id = 'content'

            container.appendChild(div)
            div.appendChild(h3)
            div.appendChild(pInfo)
            div.appendChild(img)
        }
     })
     .catch(error => {
            console.log(error)
        })
}


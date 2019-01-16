const array = []
let localTemp = 0

navigator.geolocation.getCurrentPosition((position) => { // Get position of the computer
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    array.push(lat, lon);  
})

// Fetch API season, use gov api, get the pos API, then parse for the temp

AFRAME.registerComponent('myscene', { // Start the scene!
    init: function () {
      // Add code here!
        console.log('Welcome to doing A-Frame properly');
        const sceneEl = document.querySelector('a-scene')
        console.log(sceneEl.querySelector('a-octahedron'))
        console.log(sceneEl.querySelector('a-entity'))

        const octahedron = sceneEl.querySelector('a-octahedron')
        const text = sceneEl.querySelector('a-text')

        octahedron.setAttribute('color', 'red')

        octahedron.addEventListener('click', function(){

        if (this.getAttribute('color') === 'green'){
            console.log("Now red!")
            this.setAttribute('color', 'red');
        } else if (this.getAttribute('color') === 'red') {
            console.log("Now green!")
            this.setAttribute('color', 'green');
        }
        console.log("Clicked!")
        })

        const entity = sceneEl.querySelector('a-entity')
        console.log(entity.getAttribute('text'))
        console.log(entity.getAttribute('text').value)

        text.addEventListener('click', getWeather)

        text.addEventListener('click', function(){
            entity.setAttribute('text', 
            'value', 
            `Latitude: ${array[0]} | Longitude: ${array[1]} | Temperature: ${localTemp}` // Use aFrame animate to animate the text
            ) 
        })
    } 
  });

let information = []
let forecast = []
function getWeather(){
    let url = `https://api.weather.gov/points/${array[0]},${array[1]}`
    async function getData(){
        let response = await fetch(url)
        let data = await response.json()
        return data;
    }
    getData()
     .then(data => {
         information.push(data)

         let second_url = information[0]['properties']['forecast']
         async function getDataB(){
             let response = await fetch(second_url)
             let data = await response.json()
             return data;
         }
         getDataB()
          .then(data => {
              forecast.push(data)
              localTemp = forecast[0]['properties']["periods"][0]["temperature"]
          })
     })
}


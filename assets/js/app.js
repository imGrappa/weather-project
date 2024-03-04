const url = 'https://api.openweathermap.org/data/2.5/'
const key = '5535823e931208a7c06553cc31315d70'

const setQuery = () => {
    getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description[0].toUpperCase() + result.weather[0].description.slice(1)

    let minmax = document.querySelector('.min-max')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.querySelector('.searchBar')
searchBar.addEventListener('keyup', setQuery)
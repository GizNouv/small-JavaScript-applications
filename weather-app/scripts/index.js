const weatherBox = document.querySelector('.weather')
const weatherIcon = document.querySelector('.weather-icon')
const searchBtn = document.getElementById("searchBtn")
const searchBox = document.getElementById('searchBox')

let value;
searchBox.addEventListener('change' , (e) => {
    value = e.target.value
})

apiKey = "f3bed83a8276f74db26de67546f29dd1"
apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function weather () {
    const response = await fetch(apiUrl + `&q=${value}` + `&appid=${apiKey}`)

    if(response.status == '404') {
        document.querySelector('.error').style.display = 'block'
        weatherBox.style.display = 'none'
    } else {

        var data = await response.json()
        setTimeout(() => {
            searchBox.value = ''
        } , 100)
    
        document.querySelector('.temp').innerText = `${Math.trunc(data.main.temp)}°C`
        document.querySelector('.city').innerText = data.name
        document.querySelector('.humidity').innerText = `${Math.trunc(data.main.humidity)}%`
        document.querySelector('.wind').innerText = `${Math.trunc(data.wind.speed)} km/h`
    
    
        switch(data.weather[0].main) {
            case "Clear" :
                weatherIcon.src = './assets/images/clear.png';
                break;
            case "Clouds" :
                weatherIcon.src = './assets/images/clouds.png';
                break;
            case "Drizzle" :
                weatherIcon.src = './assets/images/drizzle.png';
                break;
            case "Mist" :
                weatherIcon.src = './assets/images/mist.png';
                break;
            case "Rain" :
                weatherIcon.src = './assets/images/rain.png';
                break;
            case "Snow" :
                weatherIcon.src = './assets/images/snow.png';
                break;
        };

        document.querySelector('.error').style.display = 'none'
        weatherBox.style.display = 'block'
    }

};


searchBtn.addEventListener('click' , weather)
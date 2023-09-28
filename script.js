

// variables
let cardEl = document.querySelector(".card");
let searchBtnEl = document.querySelector(".search-btn");
let searchHistoryEl = document.querySelector(".search-history");
let weatherDataEl = document.querySelector(".weather-data");
let currentWeatherEl = document.querySelector(".current-weather")
let forecastEl = document.querySelector(".forecast");


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=6b0d57e0839124a28215d650b3438d88&units=imperial&q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?&appid=6b0d57e0839124a28215d650b3438d88&units=imperial&q=";
const searchTextEl = document.querySelector("#search-text");
const getCityEl = document.querySelector("#get-city")




// functions
let getCity = function (event) {
    let cityName = searchTextEl.value.trim();

    if (cityName) {
        localStorage.setItem("cityName", cityName);
        getWeather(cityName);
        getForecast(cityName);
        // searchHistory(cityName);
    }

};
let getForecast = function (city) {

    let url = forecastUrl + city
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            showForecast(data)
            
           
            }

        )}





let getWeather = function (city) {
    let url = apiUrl + city
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let wind = data.wind.speed;
            let name = data.name;

            let weather = [name, temp, humidity, wind];

            showWeather(weather);
        })
    }

    // todo: get weather from city searched

    let showForecast = function(data){
        let forecast = [];



            for (let i = 7; i < data.list.length; i += 8) {

                let date = data.list[i].dt_txt
                let temp = data.list[i].main.temp
                let wind = data.list[i].wind.speed
                let humidity = data.list[i].main.humidity
                let weather = { date, temp, wind, humidity }

                forecast.push(weather);
                console.log(weather.date);

                
    }
    forecast.forEach(weather => {
        const info = document.createElement("li");
        info.classList.add("card");

        info.innerHTML = ` 
     <li class="card">
    <h3>${weather.date}</h3>
    <h4>temp:${weather.temp}F</h4>
    <h4>Wind:${weather.wind}MPH</h4>
    <h4>Humidity:${weather.humidity}%</h4>
</li>`
        forecastEl.appendChild(info)

    })}

    function showWeather(weather) {
        let name = weather[0];
        let temp = weather[1];
        let wind = weather[2];
        let humidity = weather[3];

        weatherDataEl.innerHtml = ""


        currentWeatherEl.innerHTML = `
<h2>${name}</h2>
<h4>Temperature:${temp}</h4>
<h4>Wind:${wind} M/S</h4>
<h4>Humidity:${humidity}%</h4>
`
    }
    // let searchHistory = function (cityName) {
    //     let recentCity = localStorage.getItem("cityName");



    //     recentCity.forEach(cityName => {
    //         const button = document.createElement("button");
    //         button.innerHTML = cityName;


    //         searchHistoryEl.appendChild(button)
    //     });
    // make a button for all weather stored locally 

getCityEl.addEventListener("click", function (event) {
    event.preventDefault();

});


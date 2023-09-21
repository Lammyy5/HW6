

// variables
const searchTextEl = document.querySelector("#search-text");
const getCityEl = document.querySelector("#get-city")
let cardEl = document.querySelector(".card");
let searchBtnEl = document.querySelector(".search-btn");
let weatherDataEl = document.querySelector(".weather-data");
let currentWeatherEl = document.querySelector(".current-weather")

// const cityEntry = searchTextEl.value;
localStorage.getItem("city", searchTextEl);


// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const searchTerm = search.value;

// })


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=6b0d57e0839124a28215d650b3438d88&units=imperial&q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?&appid=6b0d57e0839124a28215d650b3438d88&units=imperial&q=";



// functions
let getCity = function (event) {
    let cityName = searchTextEl.value.trim();

    if (cityName) {
        getWeather(cityName);
        getForecast(cityName);
    }

};
let getForecast = function (city) {
    let url = forecastUrl + city
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        let forecast = [];
        forecast.push(data.list)
// console.log(forecast);


            for (let i = 7; i < data.list.length; i += 8) {
                
                forecast.push(data.list[i]);
                console.log(data.list[i]);
                for (let i = 0;i < cardEl.length; i++) {
                    const card = cardEl[i].children;
                    card[0].textContent = data.list[i].dt_txt
                    card[1].textContent = data.list[i].main.temp + "\u00B0"
                    card[2].textContent = data.list[i].wind.speed + "mph"
                    card[3].textContent = data.list[i].main.humidity + "%"
            
            }
                
            }
               
        })}


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

            console.log(temp)
            // showWeather(data.results)
            // console.log(data)
            showWeather(weather);
            // showWeather();
        })
    let showForecast = function (weather) {
        // console.log(date)

        weather.forEach(weather => {
            const card = document.createElement("li");
            card.innerHTML = `
    // <h3>${weather[0]}</h3>
    // <h4>${weather[1]}F</h4>
    // <h4>${weather[2]}mph</h4>
    // <h4>Humidity:${weather[3]}%</h4>`

        })
    }

// todo: get weather from city searched


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
function searchHistory() {
    // make a button for all weather stored locally 
}
getCityEl.addEventListener("click", function (event) {
    event.preventDefault();
    getCity();
    
    // getCity();

});
//     event.preventDefault();
//     console.log("form")
// });
// todo: search city from input and call get weather

}

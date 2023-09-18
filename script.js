

// variables
let searchTextEl = document.querySelector('.search-text');
let cardEl = document.querySelector(".card");
let searchBtnEl = document.querySelector(".search-btn");
const apiKey = "fbdc342084b8124c286a4cc505b954ca"
const apiUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" + searchTextEl + "&limit=5&appid=" + apiKey;


// functions


let getWeather = function() {
    // todo: get weather from city searched
}

let searchButton = searchBtnEl.addEventListener("click", function() {
    // todo: search city from input and call get weather
})


$.getJSON("https://ipapi.co/json/", function(data) {
    var city = data.city;
    var country = data.country_name;
    var countryCode = data.country_code;

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode + "&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";

    $.getJSON(apiUrl, function(weatherData) {
        document.getElementById('weather').innerHTML = weatherData.weather[0].description;
        document.getElementById('location').innerHTML = city + ", " + country;
        document.getElementById('temp').innerHTML = (weatherData.main.temp - 273.15).toFixed(1);
        document.getElementById('icon').src = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    });

    var londonUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";

    $.getJSON(londonUrl, function(londonData) {
        document.getElementById('weather-london').innerHTML = londonData.weather[0].description;
        document.getElementById('location-london').innerHTML = "London, UK";
        document.getElementById('temp-london').innerHTML = (londonData.main.temp - 273.15).toFixed(1);
        document.getElementById('icon-london').src = "http://openweathermap.org/img/w/" + londonData.weather[0].icon + ".png";
    });
});

var newYorkUrl = "https://api.openweathermap.org/data/2.5/weather?q=New York,US&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";

$.getJSON(newYorkUrl, function(newYorkData) {
    document.getElementById('weather-newyork').innerHTML = newYorkData.weather[0].description;
    document.getElementById('location-newyork').innerHTML = "New York, US";
    document.getElementById('temp-newyork').innerHTML = (newYorkData.main.temp - 273.15).toFixed(1);
    document.getElementById('icon-newyork').src = "http://openweathermap.org/img/w/" + newYorkData.weather[0].icon + ".png";
});

// Tokyo
var tokyoUrl = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";

$.getJSON(tokyoUrl, function(tokyoData) {
    document.getElementById('weather-tokyo').innerHTML = tokyoData.weather[0].description;
    document.getElementById('location-tokyo').innerHTML = "Tokyo, JP";
    document.getElementById('temp-tokyo').innerHTML = (tokyoData.main.temp - 273.15).toFixed(1);
    document.getElementById('icon-tokyo').src = "http://openweathermap.org/img/w/" + tokyoData.weather[0].icon + ".png";
});

// Dubai
var dubaiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Dubai,AE&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";

$.getJSON(dubaiUrl, function(dubaiData) {
    document.getElementById('weather-dubai').innerHTML = dubaiData.weather[0].description;
    document.getElementById('location-dubai').innerHTML = "Dubai, AE";
    document.getElementById('temp-dubai').innerHTML = (dubaiData.main.temp - 273.15).toFixed(1);
    document.getElementById('icon-dubai').src = "http://openweathermap.org/img/w/" + dubaiData.weather[0].icon + ".png";
});


var request = new XMLHttpRequest();
request.open('GET', true);
request.onload = function() {
    var obj = JSON.parse(this.response);
    console.log(obj);

    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = (obj.main.temp - 273.15).toFixed(1);

    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (request.status == 200) {
        var temp = obj.main.temp;
    } else {
        console.log("The city doesn't exist! Kindly check");
    }
}
request.send();

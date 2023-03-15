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


  var request = new XMLHttpRequest();
  request.open('GET', true);
  request.onload = function () {
    var obj = JSON.parse(this.response);
    console.log(obj);

    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
document.getElementById('temp').innerHTML = (obj.main.temp - 273.15).toFixed(1);

    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (request.status >= 200 && request.status < 400) {
      var temp = obj.main.temp;
    }
    else {
      console.log("The city doesn't exist! Kindly check");
    }
  }
  request.send();
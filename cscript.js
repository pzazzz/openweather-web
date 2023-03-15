function getWeather() {
  var city = document.getElementById("city").value;
  var link =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";

  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.cod === "404") {
        document.getElementById("location").innerHTML = "";
        document.getElementById("weather").innerHTML = "";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("icon").src = "";
        console.log("The city doesn't exist! Kindly check");
      } else {
        document.getElementById("location").innerHTML = data.name;
        document.getElementById("weather").innerHTML =
          data.weather[0].description;
        document.getElementById("temp").innerHTML = (
          data.main.temp - 273.15
        ).toFixed(1);
        document.getElementById("icon").src =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      }
    })
    .catch((error) => console.error(error));
}
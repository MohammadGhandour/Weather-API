const myInput = document.getElementById("myInput");

const getWeather = function() {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&appid=4ed799e3daecdccecaa4502f4edc1912&units=metric`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("cityTemperature").innerHTML = data.main.temp;
        document.getElementById("cityHumidity").innerHTML = data.main.humidity + " %";
        document.getElementById("cityWind").innerHTML = data.wind.speed + " km/h";
        document.getElementById("errorMsg").innerHTML = "";
        document.getElementById("errorMsg").style.padding = "0";
        document.querySelector("button").style.borderRadius = "5px";
        if (data.main.humidity > 70) {
            document.querySelector("img").setAttribute('src', 'images/rainy2.jpg');
        } else {
            document.querySelector("img").setAttribute('src', 'images/background.jpg');
        }
    })
    .catch(err => {
        console.log("Sorry we couldn't get to the website.");
        document.getElementById("cityName").innerHTML = "...";
        document.getElementById("cityTemperature").innerHTML = "...";
        document.getElementById("cityHumidity").innerHTML = "..." + " %";
        document.getElementById("cityWind").innerHTML = "..." + " km/h";
        if (err) {
            document.getElementById("errorMsg").innerHTML = "Please enter a valid city.";
            document.getElementById("errorMsg").style.padding = "5px";
            document.querySelector("button").style.borderRadius = "5px 5px 5px 0";
        }
    })
}

document.querySelector("button").addEventListener("click", getWeather);

getWeather();

window.addEventListener("keydown", function(e) {
    if(e.key == "Enter") {
        getWeather();
    }
})

const API_KEY = "f016653e87b3acfbd0df17e79a3fc49f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unites=metric`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
}

function onGeoFail(position) {
    alert("Can't find you. No weather for you.");
}

//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);

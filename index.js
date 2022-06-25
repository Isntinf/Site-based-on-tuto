/* It's selecting the card element and assigning it to the card variable. */
const card = document.querySelector(".card")

/* It's a GSAP animation. */

const tl = new TimelineMax({ delay: 0.5 });

tl.from(card, 1, { opacity: 0 })
    .from(card, 1, { color: '#4d4d4d' })

/* It's a JavaScript object. */

let weather = {
    apiKey: "06c921750b9a82d8f5d1294e1586276f",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    /* It's a JavaScript object. */
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1920x1080/?" + "landscape" + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);


    },
};

/* It's a JavaScript event listener. It's listening for a click event on the search button. When the
button is clicked, it calls the search function. */
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

/* It's listening for a keyup event on the search bar. When the enter key is pressed, it calls the
search function. */
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

/* It's listening for a click event on the search button. When the button is clicked, it calls the
search function. */
document
    .querySelector(".search buutton")
    .addEventListener("click", function() {
        weather.search();
    })
    /* It's calling the fetchWeather function and passing in the string "Bogatynia" as the city parameter. */

weather.fetchWeather('Bogatynia')
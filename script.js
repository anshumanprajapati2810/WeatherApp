let weather = {
    "apikey" : "a6b08a1dc29854430ffaff30ae40ed92",
    fetchWeather: function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid="
        + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {country} = data.sys;
        const {icon,description} = data.weather[0];
        const {temp,temp_min,temp_max,humidity} = data.main;
        const{speed} = data.wind; 
        console.log(name,icon,description,temp,temp_min,temp_max,humidity,country,speed);
        document.querySelector(".city").innerText = "Weather in " + name + " , " + country;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp.toFixed(1) + "°C";
        document.querySelector(".min").innerText = "Min. temp: " + temp_min.toFixed(1) + "°C";
        document.querySelector(".max").innerText = "Max. temp: "+ temp_max.toFixed(1) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: "+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + (speed*0.27).toFixed(1) + "m/s";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?"+ description + "')"
    },
    search : function(){
        this.fetchWeather( document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
weather.fetchWeather("Anand");

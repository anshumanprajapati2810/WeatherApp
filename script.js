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
        document.querySelector(".city").innerText = "Weather in " + name;
        
    }
};


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} for api call
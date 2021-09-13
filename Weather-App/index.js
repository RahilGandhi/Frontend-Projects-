
console.log('Hello There')
let weather = {
    "apikey" : "68e10628160a211aacdd2c12a29f1e8d",
    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displaydata(data));
    },
    displaydata: function(data){
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".temprature").innerText = temp + "°C"
        document.querySelector(".description").innerText = description
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + " Km/Hr"
    },
    /*search: function(){
        let input = document.querySelector(".searchbar").value
        this.fetchweather(input)
    }*/
};
function onClick(){
    let input = document.querySelector(".searchbar").value
    console.log(input)
    
    weather.fetchweather(input)
}



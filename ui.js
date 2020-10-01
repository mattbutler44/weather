class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.uvIndex = document.getElementById('w-uv-index');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.pressure = document.getElementById('w-pressure');
  }

  paint(weather){
    this.location.textContent = `${weather.responseDataBasic.name}`;
    this.desc.textContent = weather.responseDataBasic.weather[0].description;
    this.string.textContent = `${Math.round(weather.responseDataBasic.main.temp)}° F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.responseDataBasic.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.responseDataBasic.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${Math.round(weather.responseDataBasic.main.feels_like)}°F`;
    this.dewpoint.textContent = `Dew Point: ${Math.round(weather.responseDataExtended.current.dew_point)}°`;
    this.wind.textContent = `Wind Speed: ${Math.round(weather.responseDataBasic.wind.speed)} MPH`;
    this.uvIndex.textContent = `UV Index: ${weather.responseDataExtended.current.uvi}`;
    this.sunrise.textContent = `Sunrise: ${this.convertToTimestamp((weather.responseDataBasic.sys.sunrise * 1000) - weather.responseDataBasic.timezone)}`;
    this.sunset.textContent = `Sunset: ${this.convertToTimestamp((weather.responseDataBasic.sys.sunset * 1000) - weather.responseDataBasic.timezone)}`;
    this.pressure.textContent = `Barometric Pressure: ${weather.responseDataBasic.main.pressure}`;
  }

  convertToTimestamp(utc){
    const unixTimestamp = utc;
    // Create a new JavaScript Date object based on the timestamp
    const date = new Date(unixTimestamp);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = '0' + date.getMinutes();
    let formattedTime;
    if(hours < 12){
      formattedTime = hours + ':' + minutes.substr(-2) + ' AM';//  + ':' + seconds.substr(-2);
      return formattedTime;
    } else if( hours === 12) {
      formattedTime = hours + ':' + minutes.substr(-2) + ' PM';//  + ':' + seconds.substr(-2);
      return formattedTime;
    } else {
      formattedTime = hours - 12 + ':' + minutes.substr(-2) + ' PM';//  + ':' + seconds.substr(-2);
      return formattedTime;
    }

  }
}
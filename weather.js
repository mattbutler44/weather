class Weather{
  constructor(city, state){
    this.apiKey = config.MY_API_KEY;
    this.city = city;
    this.state = state;
  }
  // Fetch weather from API
  async getBasicWeather(city, state){
    const responseBasic = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${this.apiKey}`);
    const responseDataBasic = await responseBasic.json();

    const lat = responseDataBasic.coord.lat;
    const lon = responseDataBasic.coord.lon;

    const responseExtended = 
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,daily&appid=${this.apiKey}`);
    const responseDataExtended = await responseExtended.json();

    return {
      responseDataBasic,
      responseDataExtended
    };
  }

  async getExtendedWeather(lat, lon){
    const response = 
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,daily&appid=${this.apiKey}`);

    const responseData2 = await response.json();
    console.log('extended' + response.responseData2);
    return responseData2;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
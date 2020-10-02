class Weather{
  constructor(city, state){
    this.apiKey = config.MY_API_KEY;
    this.city = city;
    this.state = state;
  }
  // Fetch weather from API
  async getWeather(city, state){
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

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
// Init storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (event) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // save location to local storage
  storage.setLocationData(city, state);
    
  // change location
  weather.changeLocation(city, state);

  getWeather();

  // close modal.. with jquery
  $('#locModal').modal('hide');
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
});

function getWeather(){
  this.weatherLocation = storage.getLocationData();
  weather.getBasicWeather(this.weatherLocation.city, this.weatherLocation.state)
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
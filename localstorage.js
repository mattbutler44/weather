class Storage{
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'Miami';
    this.defaultState = 'Florida';
    this.lat;
    this.lon;
    this.defaultLat = 25.76;
    this.defaultLon = -80.19;
  }

  getLocationData(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null){
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    if(localStorage.getItem('lat') === null || !isFinite(localStorage.getItem('lat'))){
      this.lat = this.defaultLat;
    } else {
      this.lat = localStorage.getItem('lat');
    }

    if(localStorage.getItem('lon') === null || !isFinite(localStorage.getItem('lon'))){
      this.lon = this.defaultLon;
    } else {
      this.lon = localStorage.getItem('lon');
    }

    return{
      city: this.city,
      state: this.state
    };
  }

  setLocationData(city, state){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }

  setLatLon(lat, lon){
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);
  }
}
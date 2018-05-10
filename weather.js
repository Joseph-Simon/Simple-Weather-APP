class Weather {
  constructor(city, state) {
    this.apiKey = '2947e9af784f3f41';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async geWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
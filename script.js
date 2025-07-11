/* => 화살표 함수  */
const getCurrentWeather = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=846b2fa78ea9f22cb8c10e69b7e90551&units=metric`;

  
  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      const temp = document.querySelector(".temp");
      temp.innerText = `${result.main.temp}도`;

      let weatherInfo; /*const와 더불어 변수를 선언하는 문법 let*/

      const weather = document.querySelector(".weather");
      switch(result.weather[0].main) {
        case "Clear":
          weatherInfo = "🌼맑음🌼";
      }
      weather.innerText = weatherInfo;

      let cityName;
      const city = document.querySelector(".city");
      switch(result.name) {
        case "Jamwon-dong" :
          cityName = "🏚역삼동"
      }
      city.innerText = cityName;

      const icon = document.querySelector(".icon");
      icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    });
}

const getPosition = (position) => {
  const {latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);

} ;

const errorHandle = (error) => {
  console.error(error); /* console은 기존 print와 같은 역할 */
};



if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle)
} else{
  console.log("geolocation is not available");
}
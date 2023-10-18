console.log("hey over here 🥲🥲🥲🥲");

// TODO Set and call api calling
// OpenweatherApi calling

const OpenweatherApi = "0c90570a9d612c792c03db760fd42deb";
const callAPIRequest = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${OpenweatherApi}`;
// console.log(callAPIRequest);

// Function for getting Location based on latitude and longitude witrh accuracy
// navigator.geolocation.getCurrentPosition(function (location) {
//   console.log(location.coords.latitude);
//   console.log(location.coords.longitude);
//   console.log(location.coords.accuracy);
// });

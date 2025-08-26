let inputCity = document.getElementById("text");
let card = document.querySelectorAll(".Time");
let output = document.getElementById("output");
let date = document.getElementById("Date");

inputCity.onclick = function () {
  if (inputCity.value === "") {
    alert("Please enter a city name");
  } else {
    // let City = inputCity.value;
    // axios
    //   .get(
    //     `https://api.aladhan.com/v1/timingsByCity?city=${City}&country=Egypt&method=5`
    //   )
    //   .then((response) => {
    //     output.innerHTML = City;
    //     date.innerHTML = response.data.data.date.gregorian.date;
    //     let data = response.data.data.timings;
    //     card[0].innerHTML = data.Fajr;
    //     card[1].innerHTML = data.Sunrise;
    //     card[2].innerHTML = data.Dhuhr;
    //     card[3].innerHTML = data.Asr;
    //     card[4].innerHTML = data.Maghrib;
    //     card[5].innerHTML = data.Isha;
    //   })
    //   .catch((error) => console.error(error));

    // *******************************************************

    let requset = new XMLHttpRequest();
    let City = inputCity.value;
    requset.open(
      "GET",
      `https://api.aladhan.com/v1/timingsByCity?city=${City}&country=Egypt&method=5`
    );
    requset.responseType = "json";
    requset.send();
    requset.onload = () => {
      output.innerHTML = City;
      date.innerHTML = requset.response.data.date.gregorian.date;
      let data = requset.response.data.timings;
      card[0].innerHTML = data.Fajr;
      card[1].innerHTML = data.Sunrise;
      card[2].innerHTML = data.Dhuhr;
      card[3].innerHTML = data.Asr;
      card[4].innerHTML = data.Maghrib;
      card[5].innerHTML = data.Isha;
    };
  }
};

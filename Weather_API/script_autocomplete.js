//48314f79288f5dc25b9224cd20595f35
// 1. type a city name into an input
// 2. send an AJAX request using
//that city name
// 3. Display the response JSON
// in the console
// const btn = document.querySelector("button");
// btn.addEventListener("click", loadData);
// console.log("hihi");

let cities;
let sortedArr = [];
let a = -1;

function loadCities() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./city.list.json");

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
      cities = JSON.parse(xhr.responseText);
      sortCities(cities);
    }
  });

  xhr.send(null);
  return cities;
}

function sortCities(cities) {
  cities.sort(function (a, b) {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  });
  cities.forEach((object) => {
    sortedArr.push(object.name);
  });
  return sortedArr;
}
loadCities();

let input = document.querySelector("input");
let searchContainer = document.querySelector(".search");

function search() {
  let j = 0;
  searchContainer.innerHTML = "";
  let searched = input.value;
  if (input.value != "") {
    for (i = 0; i < sortedArr.length; i++) {
      if (
        sortedArr[i].substr(0, searched.length).toLowerCase() ==
        searched.toLowerCase()
      ) {
        if (sortedArr[i].toLowerCase() != sortedArr[i + 1].toLowerCase()) {
          let addCity = document.createElement("p");
          addCity.textContent = sortedArr[i];
          addCity.addEventListener("click", () => {
            loadData(addCity.textContent);
          });
          searchContainer.appendChild(addCity);
          j++;
          if (j == 5) {
            return;
          }
        }
      }
    }
  } else {
    input.style.border = "1px solid green";
    return;
  }
}
input.addEventListener("keyup", function (e) {
  if (e.key != "ArrowDown" && e.key != "ArrowUp" && e.key != "Enter") {
    search();
  }
});

function handleSelection(cityStr) {
  a = -1;
  input.value = cityStr;
}

input.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown") {
    a++;
    if (a == searchContainer.children.length) {
      // children = p's
      a = 0;
      searchContainer.children[
        searchContainer.children.length - 1
      ].style.backgroundColor = "rgba(200, 200, 200, 0.6)";
      searchContainer.children[0].style.backgroundColor =
        "rgba(200, 200, 200, 1)";
    }
    if (searchContainer.children[a - 1]) {
      searchContainer.children[a - 1].style.backgroundColor =
        "rgba(200, 200, 200, 0.6)";
    }
    if (searchContainer.children[a]) {
      searchContainer.children[a].style.backgroundColor =
        "rgba(200, 200, 200, 1)";
    }
    if (i == searchContainer.children.length) {
      searchContainer.children[
        searchContainer.children.length - 1
      ].style.backgroundColor = "rgba(200, 200, 200, 0.6)";
      a = 0;
    }
  }
  if (e.key == "ArrowUp") {
    a--;
    if (a == -1) {
      a = searchContainer.children.length - 1;
      searchContainer.children[0].style.backgroundColor =
        "rgba(200, 200, 200, 0.6)";
      searchContainer.children[
        searchContainer.children.length - 1
      ].style.backgroundColor = "rgba(200, 200, 200, 1)";
    } else {
      if (searchContainer.children[a + 1]) {
        searchContainer.children[a + 1].style.backgroundColor =
          "rgba(200, 200, 200, 0.6)";
      }
      if (searchContainer.children[a]) {
        searchContainer.children[a].style.backgroundColor =
          "rgba(200, 200, 200, 1)";
      }
    }
  }

  if (e.key == "Enter") {
    console.log("CLICKED");
    searchContainer.innerHTML = "";
    loadData(searchContainer.children[a].textContent);
    if (a < 0) {
      handleSelection(input.value);
    }
  } else {
  }
});

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchContainer.innerHTML = "";
    let inputValue = input.value;
    console.log("hi");
    loadData(inputValue);

    function loadData() {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=48314f79288f5dc25b9224cd20595f35&units=metric`
      );
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === xhr.DONE) {
          let data = JSON.parse(xhr.responseText);
          console.log(data);
          formatData(data);
        }
      });
      xhr.send(null);
    }
  }
});

const date = new Date();
const day = date.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayCount = 0;

function formatData(data) {
  const container = document.querySelector("#content-container");

  let currWeather = data.list[0];
  // let iconId = currWeather.weather[0].icon;
  container.innerHTML = "";

  // make it daily
  // i+=8 is because the data is in 3 hour increments.
  // so 8 * 3 hours = 24 hours to get the next day
  for (let i = 0; i < data.list.length; i += 8) {
    let todayDiv1 = document.createElement("div");
    let currWeather = data.list[i];
    let iconId = currWeather.weather[0].icon;
    if (i == 0) {
      todayDiv1.className = "todayDiv1";
      let city = document.createElement("h2");
      city.textContent = data.city.name;
      todayDiv1.appendChild(city);
    }
    let dt = data.list[i].dt;
    const d = new Date(dt * 1000);
    const day = document.createElement("h2");
    day.textContent = weekdays[d.getDay()];
    todayDiv1.appendChild(day);

    if (i >= 1) {
      todayDiv1.className = "nextDay";
    }

    // add day of week
    // let date = document.createElement("p");
    // date.textContent = weekDay(day + dayCount);
    // todayDiv1.appendChild(date);
    // dayCount++;

    //add icon
    let iconContainer = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${iconId}@2x.png`
    );
    todayDiv1.appendChild(img);
    // todayDiv1.appendChild(iconContainer);
    //add temp O
    let temp = document.createElement("p");
    temp.textContent = currWeather.main.temp.toFixed(0) + "°C";
    todayDiv1.appendChild(temp);
    //add description O
    let descr = document.createElement("p");
    descr.textContent = currWeather.weather[0].description;
    todayDiv1.appendChild(descr);

    // container.appendChild(todayDiv1);
    // let nextDay = document.querySelectorAll(".nextDay");
    // console.log(nextDay);
    // let nextDay2 = document.createElement('div');
    // nextDay2.appendChild(nextDay);
    // document.body.appendChild(nextDay2);

    if (i == 0) {
      //   let todayDiv2 = document.createElement("div");
      //   todayDiv2.className = "todayDiv2";
      // add wind O
      let infoDiv = document.createElement("div");
      infoDiv.className = "infoDiv";
      todayDiv1.appendChild(infoDiv);
      let wind = document.createElement("p");
      wind.textContent = "Wind: " + currWeather.wind.speed.toFixed(0) + " m/s";
      infoDiv.appendChild(wind);
      // add pressure O
      let pressure = document.createElement("p");
      pressure.textContent = "Pressure: " + currWeather.main.pressure + " hPa";
      infoDiv.appendChild(pressure);
      // add humidity O
      let humid = document.createElement("p");
      humid.textContent = "Humidity: " + currWeather.main.humidity + "%";
      infoDiv.appendChild(humid);
      // add cloudiness O
      let cloudy = document.createElement("p");
      cloudy.textContent = "Cloudiness: " + currWeather.clouds.all + "%";
      infoDiv.appendChild(cloudy);
    }
    container.appendChild(todayDiv1);
  }
}

// loadData();

//48314f79288f5dc25b9224cd20595f35
// 1. type a city name into an input
// 2. send an AJAX request using 
//that city name
// 3. Display the response JSON
// in the console
const btn = document.querySelector("button");
btn.addEventListener("click", loadData);

let input = document.querySelector("input");
input.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        loadData();
    }
})

function loadData() {
    let cityName = input.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=48314f79288f5dc25b9224cd20595f35&units=metric`);
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            formatData(data);
        }
    });
    xhr.send(null);
}
const date = new Date();
const day = date.getDay();
function weekDay(day) {
    switch (day) {
        case 0:
            return day = "Sunday";
        case 1:
            return day = "Monday";
        case 2:
            return day = "Tuesday";
        case 3:
            return day = "Wednesday";
        case 4:
            return day = "Thursday";
        case 5:
            return day = "Friday";
        case 6:
            return day = "Saturday";
        case 7:
            return day = "Sunday";
        case 8:
            return day = "Monday";
        case 9:
            return day = "Tuesday";
    }
};
const container = document.querySelector("#content-container");
let dayCount = 0;
function formatData(data) {
    let currWeather = data.list[0];
    let iconId = currWeather.weather[0].icon;
    container.innerHTML = "";
    // console.log("City:", data.city.name);
    // console.log("Date:", weekDay(day));
    // console.log(currWeather.weather[0].icon); // icon
    // console.log("Temperature:", currWeather.main.temp + '°C');
    // console.log(currWeather.weather[0].description); // cloudy/overcast...
    // console.log("Wind:", currWeather.wind.speed + 'm/s');
    // console.log("Humidity:", currWeather.main.humidity + '%');
    // console.log("Pressure:", currWeather.main.pressure + 'hPa');
    // console.log("Cloudiness:", currWeather.clouds.all + '%');

    // let todayDiv1 = document.createElement('div');
    // todayDiv1.className = "todayDiv1";

    // let city = document.createElement('p')
    // city.textContent = data.city.name;
    // todayDiv1.appendChild(city);
    // let date = document.createElement('p')
    // date.textContent = weekDay(day);
    // todayDiv1.appendChild(date);
    // let icon = document.createElement('img');
    // icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconId}@2x.png`);
    // todayDiv1.appendChild(icon);
    // let temp = document.createElement('p')
    // temp.textContent = currWeather.main.temp + '°C';
    // todayDiv1.appendChild(temp);
    // let descr = document.createElement('p')
    // descr.textContent = currWeather.weather[0].description;
    // todayDiv1.appendChild(descr);


    // let wind = document.createElement('p')
    // wind.textContent = 'Wind: ' + currWeather.wind.speed + ' m/s';
    // todayDiv2.appendChild(wind);
    // let humid = document.createElement('p')
    // humid.textContent = 'Humidity: ' + currWeather.main.humidity + '%';
    // todayDiv2.appendChild(humid);
    // let pressure = document.createElement('p')
    // pressure.textContent = 'Pressure: ' + currWeather.main.pressure + ' hPa';
    // todayDiv2.appendChild(pressure);
    // let cloudy = document.createElement('p')
    // cloudy.textContent = 'Cloudiness: ' + currWeather.clouds.all + '%';
    // todayDiv2.appendChild(cloudy);

    // container.appendChild(todayDiv1);
    // container.appendChild(todayDiv2);

    // make it daily
    // i+=8 is because the data is in 3 hour increments.
    // so 8 * 3 hours = 24 hours to get the next day
    for (let i = 0; i < data.list.length; i += 8) {
        let currWeather = data.list[i];
        let iconId = currWeather.weather[0].icon;
        let todayDiv1 = document.createElement('div');
        if (i == 0) {
            todayDiv1.className = "todayDiv1";
            let city = document.createElement('p');
            city.textContent = data.city.name;
            todayDiv1.appendChild(city);
        } else {
            todayDiv1.className = "nextDay";
        }
        // add day of week
        let date = document.createElement('p');
        date.textContent = weekDay(day + dayCount);
        todayDiv1.appendChild(date);
        dayCount++;
        //add icon
        let iconContainer = document.createElement('div');
        let icon = document.createElement('img');
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconId}@2x.png`);
        iconContainer.appendChild(icon);
        todayDiv1.appendChild(iconContainer);
        //add temp
        let temp = document.createElement('p');
        temp.textContent = currWeather.main.temp.toFixed(0) + '°C';
        todayDiv1.appendChild(temp);
        //add description
        let descr = document.createElement('p');
        descr.textContent = currWeather.weather[0].description;
        todayDiv1.appendChild(descr);

        container.appendChild(todayDiv1);
        // let nextDay = document.querySelectorAll(".nextDay");
        // console.log(nextDay);
        // let nextDay2 = document.createElement('div');
        // nextDay2.appendChild(nextDay);
        // document.body.appendChild(nextDay2);

        if (i == 0) {
            let todayDiv2 = document.createElement('div');
            todayDiv2.className = "todayDiv2";

            // add wind
            let wind = document.createElement('p');
            wind.textContent = 'Wind: ' + currWeather.wind.speed.toFixed(0) + ' m/s';
            todayDiv2.appendChild(wind);
            // add pressure
            let pressure = document.createElement('p');
            pressure.textContent = 'Pressure: ' + currWeather.main.pressure + ' hPa';
            todayDiv2.appendChild(pressure);
            // add humidity
            let humid = document.createElement('p');
            humid.textContent = 'Humidity: ' + currWeather.main.humidity + '%';
            todayDiv2.appendChild(humid);
            // add cloudiness
            let cloudy = document.createElement('p');
            cloudy.textContent = 'Cloudiness: ' + currWeather.clouds.all + '%';
            todayDiv2.appendChild(cloudy);

            todayDiv1.appendChild(todayDiv2);
        }
    }
}


loadData();
// Get All Values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showdata = document.querySelector('.showdata');

// Get Api Key
const API_KEY = "a0e78d3b449db7059df0a38abd3952f8";

button.addEventListener('click',() => {
    const cityinput = inputTxt.value;
    // console.log(cityinput);

    // Fetch API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityinput}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            inputTxt.value = " ";
            // Now show all data value
            showdata.innerHTML = `
                                 <ul>
                                    <li class="desc"> ${data.weather[0].description} </li>
                                    <li class="city"> ${data.name} </li>
                                    <li class="temp"> ${data.main.temp} </li>
                                 </ul>
                                 `;
        });
});
const inputBox =document.querySelector(".input-box");
const btn = document.querySelector("#btn");
const img=document.querySelector(".weather-img");
const temp=document.querySelector(".temp");
const des=document.querySelector(".des");
const hu = document.getElementById("humidity");
const w = document.getElementById("wind-speed");
const not =document.querySelector(".not");
const wea=document.querySelector(".weather-body");


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//5e910932e802f92449df4c130b21eba3


async function check(city){
const api_key="5e910932e802f92449df4c130b21eba3" ;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data= await fetch(`${url}`).then(response =>
   response.json());

   if(weather_data.cod ==='400'){
   not.style.display="flex";
   wea.style.display ="none";
   return;
   }
   not.style.display="none";
   wea.style.display ="flex";
   temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
   des.innerHTML =`${weather_data.weather[0].description}`;
   hu.innerHTML =`${weather_data.main.humidity}%`;
   w.innerHTML=`${weather_data.wind.speed}`;

   switch(weather_data.weather[0].main){
    case 'Clouds':
        img.src = "images/cloud.png";
        break;
        case 'Clear':
        img.src = "images/clear.png";
        break;
        case 'Rain':
        img.src = "images/rain.png";
        break;
        case 'Mist':
        img.src = "images/mist.png";
        break;
        case 'Snow':
        img.src = "images/snow.png";
        break;

   }
}
btn.addEventListener("click",() =>{
    check(inputBox.value);
});

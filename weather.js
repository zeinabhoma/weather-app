const cityInput=document.querySelector("#input-city");
const add=document.querySelector("#add");
const error=document.querySelector(".error");
const output=document.querySelector(".output");
const main=document.querySelector(".img");
const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const minMax=document.querySelector(".min-max");
const wind=document.querySelector(".wind");
const apiKey="768d433d9a1d3b51f19a506be0bbca52";


document.addEventListener("change",getWeather);


async function getWeather(event) {
    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`);
    const weatherResult=await response.json();
      console.log(weatherResult)
      cityInput.value="";
      if(response.status==404){
        error.style.display="block"
        output.style.display="none"
      }else{
        error.style.display="none"
        output.style.display="block"
  
      }
      getInfo(weatherResult);
  }
  
function getInfo(data){
    const getMain=data["weather"][0]["main"];
    const getCity=data["name"];
    const getTemp=data["main"]["temp"];
    const getMin=data["main"]["temp_min"];
    const getMax=data["main"]["temp_max"];
    const getWind=data["wind"]["speed"];
    const celsius=getTemp - 273;
  
    main.innerHTML=`<img src='./images/${getMain}.svg'>`
    city.innerHTML=getCity;
    temp.innerHTML=`${Math.floor(celsius)}°c`;
    minMax.innerHTML=`<p>${Math.floor(getMin - 273)}°c :کمترین دما</p><p>${Math.floor(getMax -273)}°c :بیشترین دما</p>`
    wind.innerHTML=`<div><img src="./images/images_prev_ui.png" alt=""></div><div><p>${getWind} km/h</p><p>سرعت وزش باد</p></div>`;
  
  
}
  
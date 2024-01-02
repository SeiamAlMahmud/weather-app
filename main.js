

const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.description');
    
    
        const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');
    
    
    


search.addEventListener('click',getData);

async function getData() {
  
  
    const apiKey = "fb220a34334868d89134d9494f2eab51";
  const cityName = document.querySelector(".search_box input").value;
  
  if(city = "")
  return ;
  
  let apiLink = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
  
  let data = await apiLink.json();
  
  
  
    

console.log(data);



switch (data.weather[0].main){
  
  case 'Clear':
     image.src = '/images/clear.png';
    break;
  
  
  case 'Rain':
  image.src = '/images/rain.png';
  break;
  
  case 'Snow':
  image.src = '/images/snow.png';
  break;
  
  case 'Clouds':
  image.src = '/images/cloud.png';
  break;
    
    
    case 'Mist':
     image.src = '/images/mist.png';
    break;
    
    
    case 'Haze':
     image.src = '/images/mist.png';
    break;
    
    default:
    image.src = '/images/cloud.png';
}


temperature.innerHTML = `${data.main.temp}<span>°C</span>`;

description.innerHTML = data.weather[0].description;

humidity.innerHTML = `${data.main.humidity}%`;

console.log(data.weather[0].main)
}
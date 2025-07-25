import { API_KEY } from "./API.js";

async function getWeather(){
    try {
        const response = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=${API_KEY}`);
        const data = (await response).json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }



}

getWeather();



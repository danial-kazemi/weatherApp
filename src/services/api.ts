export async function getCurrentWeatherData(APIKey : string, {lat, lon} : {lat : string, lon: string}) {    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`,  {
                method: "GET",
                headers : {
                    Accept : "application/json",
                }
            });
   const weatherData : object = await response.json();
    return weatherData;
}
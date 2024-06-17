import { getCurrentWeatherData } from './services/api';
import cities from './services/data';
import './App.css'
import { useState } from 'react';
const API_Key :string = "7ab7aea99320dd30688962d5b5a98409";
interface City {
  id : number
  name: string
  lat: string
  lon: string
}

function App() {
  const [weatherData, setWeatherData] = useState();
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    const selectedLocation : City = JSON.parse(value);
    getCurrentWeatherData(API_Key, selectedLocation).then(res => {
      console.log(res)
    })
  }
  
  return (
    <>
      <h1>Weather App</h1>      
      <select name="" id="" onChange={handelChange}>
        {cities.map((item) => (<option key={item.id} value={JSON.stringify(item)}>{item.name}</option>)          
        )}
      </select>
    </>
  )
}

export default App

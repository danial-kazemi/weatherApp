import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const API_Key :string = '7ab7aea99320dd30688962d5b5a98409';
const cities = [{
  id: 1,
  name: 'Tehran',
  lat: '35.71',
  lon: ''
},
{ id: 2,
  name: 'Bushehr',
  lat: '28.5800',
  lon: '50.4800'}
]

function App() {
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    console.log(JSON.parse(value))
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

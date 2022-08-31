import { data } from 'autoprefixer'
import axios from 'axios'
import {useState,useEffect} from 'react'

import Home from './components/Home'

export const API_KEY = "f4878c9f8d449c80b5225f23a451217f"


function App() {

  const [weatherData,setWeatherData] = useState([])

  const weatherFecth = async() => {
      await axios(`https://api.openweathermap.org/data/2.5/weather?q=${"adana"}&appid=${API_KEY}`).then(res => setWeatherData(res.data))
  }

  console.log(weatherData)

  useEffect(() => {
    weatherFecth()  
  }, [])


  return (
     <div>


       
       {/* <div>{weatherData.weather.map((item) =>(
        <div>{item.description}</div>
       ))}</div> */}

          <Home />
          

        

     </div>
  )
}

export default App
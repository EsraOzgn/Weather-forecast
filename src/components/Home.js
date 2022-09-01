import React from 'react'
import Days from './Days'
import Today from './Today'
import {mainContext,useContext} from '../Context'

const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=9c5155a62a494c12be3170247220109&q=${city}&days=5&aqi=no&alerts=no`



const Home = () => {
  const {city,setCity,citySuggestion,setCitySuggestion,clicked,setClicked,cityDetails,setCityDetails} = useContext(mainContext)

  // if (weatherData !== undefined) {
  //   return <div> yükleniyor.........</div>
  // }

  const handleClick = async(clickedCity) => {
      setCity(clickedCity)
      setCitySuggestion([])
      setClicked(true)

      const resp = await fetch(weatherURL(city));
      const data = await resp.json()
      setCityDetails(data)
  }


  return (
    <div className='w-[100%] h-[1300px] flex flex-col justify-center items-center absolute'>
      <div className='input mb-[50px]'>
        <input placeholder='şehir gir' value={city} onChange={(e) => setCity(e.target.value)}/>
        
        <div>
          {citySuggestion.map((item, idx) => (
            <div onClick={() => handleClick(item)}>{item}</div>
          ))}


        </div>

      </div>
        <div className='w-[1500px] h-[750px] rounded-lg items-center   bg-sky-700'>
            <div className='flex gap-1 justify-around items-center  h-[100%] w-[100%]'>
                    <Today/>
                    <Days/>
                </div>

        </div>
    </div>  
  )
}

export default Home
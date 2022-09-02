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
    <div className='main  w-[100%] h-[100%] flex flex-col justify-center items-center absolute'>
      <div className='input mb-[50px]'>
        <input className='w-[500px] absolute top-2 border-4 rounded-3xl ring-4 ring-gray-700' placeholder='şehir gir' value={city} onChange={(e) => setCity(e.target.value)}/>
        
          <div className='.bg-transparent border z-10 absolute top-8 '>
            {citySuggestion.map((item, idx) => (
              <div onClick={() => handleClick(item)}>{item}</div>
            ))}
          </div>
      </div>

        <div className='w-[1500px] h-[750px] absolute top-32  rounded-lg  shadow-lg shadow-black .bg-transparent'>
            <div className='flex gap-1 justify-around items-center  h-[100%] w-[100%]'>
                    <Today/>
                    <Days/>
            </div>
        </div>
    </div>  
  )
}

export default Home
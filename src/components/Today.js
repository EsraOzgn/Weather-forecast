import React from 'react'
import {mainContext,useContext} from '../Context'
import {TbTemperatureCelsius} from 'react-icons/tb'

function Today() {
    const {cityData} = useContext(mainContext)

    return (
      <div className='flex content-center min-w-[50%] h-[60%] rounded-3xl mt-8 shadow-lg shadow-black backdrop-blur-lg'>
           <div className='flex-1 border-r-4 border-black'>
                    <div className='card-title justify-start mt-14 ml-16 font-extrabold text-3xl'>
                      {cityData?.name}
                    </div>

                    <div className='flex mt-20 ml-44 text-xl font-extrabold'>
                      {cityData?.main.temp} <TbTemperatureCelsius/>
                    </div>

                    <div className='ml-16'>
                      <img className='w-[100px] shadow-xl shadow-black rounded-lg' src={`icons/${cityData?.weather[0].icon}.svg`}/>
                    </div>

                    <div>
                      <div className='text-lg font-bold mt-14 ml-60 justify-center rounded-l-full shadow-yellow-600 shadow-lg  bg-yellow-500'>  <span className='ml-4 font-light'>{cityData?.weather[0].main} </span></div>
                    </div>
            </div>

               <div className='flex flex-col flex-1'>
                    <div className='mt-5 ml-56 font-extrabold'>
                      {new Date(cityData?.dt * 1000).toLocaleDateString()}
                    </div>

                    <div className='font-extrabold text-lg mt-20 ml-8 justify-center'>Feels Like :  <span className='ml-4 font-light'>{cityData?.main.feels_like}°C </span></div>

                    <div className='details-nem flex flex-col ml-8 mt-3 mb-3 justify-center'>
                      <div className='font-extrabold text-lg'>Wind : <span className='ml-4 font-light' >{cityData?.wind.speed} km/h</span></div>
                    </div>

                  <div className='details-nem flex flex-col ml-8 justify-center'>
                      <div className='font-extrabold text-lg'>Humidity : <span className='ml-4 font-light'>{cityData?.main.humidity}%</span></div>  
                  </div>
               </div>     
      </div> 
    )
}
export default Today
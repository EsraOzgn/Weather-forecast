import React from 'react'
import Country from './Country'
import {mainContext,useContext} from '../Context'


function Days() {

  const {city,setCity,citySuggestion,setCitySuggestion,clicked,setClicked,cityDetails,setCityDetails} = useContext(mainContext)




  return (
    <>



    
      <div className='flex flex-col justify-between w-[1000px] h-[650px]  rounded-lg ' >

        <div className='flex flex-row justify-between pt-10'>

       <div className='bg-gray-600  rounded-lg w-[190px] h-[370px] flex flex-col shadow-lg shadow-black'>
          <div className='flex justify-center pt-5 font-extrabold '>{cityDetails?.forecast.forecastday[0].date}</div>   
          <div className='flex justify-center pt-5 font-extrabold '>{cityDetails?.forecast.forecastday[0].day.avgtemp_c}</div> 
          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[0].day.condition.text}</div>
          <div className='flex justify-center pt-9 '><img className='shadow-lg shadow-black rounded-full border' src={cityDetails?.forecast.forecastday[0].day.condition.icon}/> </div>
          <div className='flex justify-center pt-5 font-extrabold'>rüzgar: {cityDetails?.forecast.forecastday[0].day.maxwind_kph}   </div>



         
       </div>

       <div className='bg-gray-600  rounded-lg w-[190px] h-[370px] shadow-lg shadow-black'>

          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[1].date}</div>   
          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[1].day.avgtemp_c}</div> 
          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[1].day.condition.text}</div>
          <div className='flex justify-center pt-9'><img className='shadow-lg shadow-black rounded-full border border-gray-800' src={cityDetails?.forecast.forecastday[1].day.condition.icon}/> </div>
          <div className='flex justify-center pt-5 font-extrabold'>rüzgar: {cityDetails?.forecast.forecastday[1].day.maxwind_kph}   </div>

        
       </div>

       <div className='bg-gray-600  rounded-lg w-[190px] h-[370px] shadow-lg shadow-black'>
              <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[2].date}</div>   
              <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[2].day.avgtemp_c}</div> 
              <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[2].day.condition.text}</div>
              <div className='flex justify-center pt-9'><img className='shadow-lg shadow-black rounded-full border' src={cityDetails?.forecast.forecastday[2].day.condition.icon}/> </div>
              <div className='flex justify-center pt-5 font-extrabold'>rüzgar: {cityDetails?.forecast.forecastday[2].day.maxwind_kph}   </div>

        
       </div>

       <div className='bg-gray-600  rounded-lg w-[190px] h-[370px] shadow-lg shadow-black'>

          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[3].date}</div>   
          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[3].day.avgtemp_c}</div> 
          <div className='flex justify-center pt-5 font-extrabold'>{cityDetails?.forecast.forecastday[3].day.condition.text}</div>
          <div className='flex justify-center pt-9'><img className='shadow-lg shadow-black rounded-full border' src={cityDetails?.forecast.forecastday[3].day.condition.icon}/> </div>
          <div className='flex justify-center pt-5 font-extrabold'>rüzgar: {cityDetails?.forecast.forecastday[3].day.maxwind_kph}   </div>

        

       </div>
       </div>

       
       <Country/>

       
      

      
        </div>  
        
        
        
    </>
  )
}

export default Days
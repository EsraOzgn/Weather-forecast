import React from 'react'
import {mainContext,useContext} from '../Context'
import {TbTemperatureCelsius} from 'react-icons/tb'
import {BsFillCloudHailFill} from 'react-icons/bs'



function Today() {
    const {city,setCity,citySuggestion,setCitySuggestion,clicked,setClicked,cityDetails,setCityDetails} = useContext(mainContext)


    console.log(cityDetails)

    
  
    return (
      <div className=' flex flex-col  w-[300px] h-[650px]  rounded-3xl bg-yellow-400 '>
  
         <div className='card-date flex justify-center pt-9'>
                  tarih :4  
                </div>
          
          <div className='card-title flex justify-center pt-9'>
             Şehir : {cityDetails?.location.name}
          </div>
  
  
          <div className='card-thermometer flex justify-center pt-9 '>
               Derece :  {cityDetails?.current.temp_c} <TbTemperatureCelsius/>
  
          </div>
  
          <div className='card-cloud flex justify-center pt-9'>
              <BsFillCloudHailFill size={150} color={"white"}/>
          </div>
  
          <div className='card-details flex justify-evenly pt-20'>
  
                  <div className='details-nem flex flex-col justify-center '>
                      <div>hissedilen</div>
                      <div className='p-[4px] flex justify-center'> {cityDetails?.current.feelslike_c}</div>
                  </div>
  
                  <div className='details-nem flex flex-col  justify-center'>
                      <div>Rüzgar Hızı</div>
                      <div className='p-[4px] flex justify-center'>{cityDetails?.current.gust_kph}</div>
                  </div>
  
                  <div className='details-nem flex flex-col  justify-center'>
                      <div>Nem</div>
                      <div className='p-[4px] flex justify-center'>38</div>
                  </div>
  
  
          </div> 
   
  
          
          
          </div>
    )

  



  
}

export default Today
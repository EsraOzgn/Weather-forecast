import React from 'react'
import {mainContext,useContext} from '../Context'
import {TbTemperatureCelsius} from 'react-icons/tb'


function Today() {
    const {  cityData,setCityData, searchValue,setSearchValue} = useContext(mainContext)


    return (
      <div className=' flex  flex-1content-center w-[50%] h-[60%] rounded-3xl mt-8 shadow-lg shadow-black bg-white bg-opacity-60 '>
           <div className='flex-1   border-r-4 border-black'>
                    <div className='card-title  justify-start mt-14 ml-16  font-extrabold text-3xl'>
                      {cityData?.name}
                    </div>

                    <div className='flex mt-20 ml-44 text-xl font-extrabold'>
                      {cityData?.main.temp}  <TbTemperatureCelsius/>
                    </div>

                    <div className='ml-10'>
                      <img className='w-[140px] rounded-full shadow-lg shadow-black border border-white '  src={require('../image/sun.gif')} />
                    </div>
            </div>

               <div className=' flex flex-col flex-1 '>
                    <div className='mt-5 ml-56 font-extrabold'>
                      02.09.2022  
                    </div>

                    <div className='font-extrabold text-lg mt-20 ml-8 justify-center'>Feelslike :  <span className='ml-4 font-light'>{cityData?.main.feels_like} </span></div>
                    

                    <div className='details-nem flex flex-col ml-8 mt-3 mb-3 justify-center'>
                      <div className='font-extrabold text-lg'>Wind : <span className='ml-4 font-light' >{cityData?.wind.speed}</span></div>
                    </div>

                  <div className='details-nem flex flex-col ml-8  justify-center'>
                      <div className='font-extrabold text-lg'>humadity : <span className='ml-4 font-light'>{cityData?.main.humidity}</span></div>  
                  </div>
             </div>
                 
        </div> 
    )

}

export default Today
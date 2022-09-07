import React from 'react'
import {mainContext,useContext} from '../Context'


function Days() {

  const {} = useContext(mainContext)


  return (
    <>
      <div className='  w-[70%] h-[150px]  rounded-lg  absolute bottom-1' >

        <div className='flex flex-row gap-9 justify-center'>

          <div className='bg-gray-50 bg-opacity-60  rounded-3xl w-[260px] h-[130px] shadow-lg shadow-black' >
            <div className='flex justify-center pt-5 font-extrabold '></div>   
            <div className='flex justify-center pt-5 font-extrabold '></div> 
            <div className='flex justify-center pt-5 font-extrabold'></div>
            <div className='flex justify-center pt-9 '> </div>
            <div className='flex justify-center pt-5 font-extrabold'></div> 
          </div>

          <div className='bg-gray-50 bg-opacity-60  rounded-3xl w-[260px] h-[130px] shadow-lg shadow-black'>
            <div className='flex justify-center pt-5 font-extrabold'></div>   
            <div className='flex justify-center pt-5 font-extrabold'></div> 
            <div className='flex justify-center pt-5 font-extrabold'></div>
            <div className='flex justify-center pt-9'></div>
            <div className='flex justify-center pt-5 font-extrabold'> </div>
          </div>

          <div className='bg-gray-50 bg-opacity-60 rounded-3xl w-[260px] h-[130px] shadow-lg shadow-black'>
            <div className='flex justify-center pt-5 font-extrabold'></div>   
            <div className='flex justify-center pt-5 font-extrabold'></div> 
            <div className='flex justify-center pt-5 font-extrabold'></div>
            <div className='flex justify-center pt-9'> </div>
            <div className='flex justify-center pt-5 font-extrabold'>  </div>
          </div>

          <div className='bg-gray-50 bg-opacity-60 rounded-3xl w-[260px] h-[130px] shadow-lg shadow-black'>
            <div className='flex justify-center pt-5 font-extrabold'></div>   
            <div className='flex justify-center pt-5 font-extrabold'></div> 
            <div className='flex justify-center pt-5 font-extrabold'></div>
            <div className='flex justify-center pt-9'> </div>
            <div className='flex justify-center pt-5 font-extrabold'> </div>
          </div>

        </div>
      </div>  
       
    </>
  )
}

export default Days
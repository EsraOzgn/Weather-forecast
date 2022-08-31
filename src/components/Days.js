import React from 'react'
import Country from './Country'

function Days() {
  return (
    <>

    
      <div className='flex flex-col justify-between w-[1000px] h-[650px]  rounded-lg ' >

        <div className='flex flex-row justify-between pt-10'>
       <div className='bg-orange-900  rounded-lg w-[190px] h-[370px]'>Day1</div>
       <div className='bg-orange-800  rounded-lg w-[190px] h-[370px]'>Day2</div>
       <div className='bg-orange-700  rounded-lg w-[190px] h-[370px]'>Day3</div>
       <div className='bg-orange-600  rounded-lg w-[190px] h-[370px]'>Day4</div>
       </div>

       
       <Country/>

       
      

      
        </div>  
        
        
        
    </>
  )
}

export default Days
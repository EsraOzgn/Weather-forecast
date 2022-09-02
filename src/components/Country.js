import React from 'react'
import {BsSun} from 'react-icons/bs'
import {TiWeatherStormy} from 'react-icons/ti'
import {GiRaining} from 'react-icons/gi'

function Country() {
  return (
    
<div>
 <div className='flex flex-row justify-evenly'>

       <div className='bg-gray-800  rounded-3xl w-[300px] h-[150px] shadow-lg shadow-black'>
       <h1 className='flex justify-center pt-5 font-bold text-white'><BsSun size={50} color="yellow"/> London <br/> 40 </h1> 
        
        </div>



       <div className='bg-gray-800 rounded-3xl w-[300px] h-[150px] shadow-lg shadow-black'>
       <h1 className='flex justify-center pt-5 font-bold text-white'><TiWeatherStormy size={50} color="white"/>  Roma <br/> 28</h1> 
        
        </div>




       <div className='bg-gray-800 rounded-3xl w-[300px] h-[150px] shadow-lg shadow-black'>
       <h1 className='flex justify-center pt-5 font-bold text-white'><GiRaining size={50} color="blue"/> Moskova <br/> 23 </h1> 
        

        </div>  
  </div>  
       
</div>
  )
}

export default Country
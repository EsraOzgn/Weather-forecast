import React from 'react'
import Days from './Days'
import Today from './Today'
import {mainContext,useContext} from '../Context'

const Home = () => {
  const { cityData,setCityData,searchValue,setSearchValue} = useContext(mainContext)


  return (
    <div className='main w-[100%] h-[100%] flex flex-col justify-center items-center absolute'>
        <input className=' 2xl mt-9 w-[500px] absolute top-2 left-[35%] outline-none border-b-4 pb-2 bg-inherit text-gray-300 border-green-900 opacity-70 focus:opacity-100 pl-4' placeholder='Enter a city' data={searchValue} onChange={(e) => setSearchValue(e.target.value)} /> 

        <div className='w-[70%] h-[75%] absolute rounded-lg'>
            <div className='flex justify-center h-[100%] w-[100%]'>
                    <Today/>
                    <Days/>
            </div>
        </div>
    </div>  
  )
}

export default Home
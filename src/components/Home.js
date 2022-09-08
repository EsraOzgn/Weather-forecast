import React from 'react'
import Days from './Days'
import Today from './Today'
import {mainContext,useContext} from '../Context'




const Home = () => {
  const { cityData,setCityData,searchValue,setSearchValue} = useContext(mainContext)


  return (
    <div className='main  w-[100%] h-[100%] flex flex-col justify-center items-center absolute'>
      <div className='input mb-[50px]'>
        <input className='w-[500px] absolute top-2 left-[35%] border-4 rounded-3xl ring-4 ring-gray-700' placeholder='şehir gir' data={searchValue} onChange={(e) => setSearchValue(e.target.value)} /> 
      </div>

        <div className='w-[70%] h-[75%] absolute rounded-lg   '>
            <div className='flex justify-center h-[100%] w-[100%]'>
                    <Today/>
                    <Days/>
            </div>
        </div>
    </div>  
  )
}

export default Home
import React from 'react'
import Days from './Days'
import Today from './Today'
import Country from './Country'

const Home = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center absolute'>
        <div className='w-[1500px] h-[750px] rounded-lg items-center   bg-sky-700'>
            <div className='flex gap-1 justify-around items-center  h-[100%] w-[100%]'>
                    <Today/>
                    <Days/>
                </div>

        </div>
    </div>  
  )
}

export default Home
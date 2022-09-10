import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {mainContext,useContext} from '../Context'

function Days() {
 
  const {} = useContext(mainContext)

  const [oneCountry,setOneCountry] = useState()
  const [twoCountry,setTwoCountry] = useState()
  const [threeCountry,setThreeCountry] = useState()
  const [fourCountry,setFourCountry] = useState()

  var oneNumber = Math.floor(Math.random() * (38 - 0 + 1)) + 0;
  var twoNumber = Math.floor(Math.random() * (38 - 0 + 1)) + 0;
  var threeNumber = Math.floor(Math.random() * (38 - 0 + 1)) + 0;
  var fourNumber = Math.floor(Math.random() * (38 - 0 + 1)) + 0;


   const oneFetch = async() => {
      let deneme = ["ankara","madrid","rome","paris","berlin","Vienna","Baku","Minsk","Athens","Budapest","Tokyo","Seoul","Riga","Vilnius","Amsterdam","Oslo","Lisbon","Kiev","Belgrade","Stockholm","Bern","Singapore", "Canberra", "Brussels", "Sofia", "Havana", "	Helsinki", "Tbilisi", "Dublin", "Jerusalem", "Bishkek", "Monaco", "Belfast", "Lima", "Bratislava", "Bangkok", "Cardiff", "Caracas"]
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${deneme[oneNumber]}&appid=d9b7738c8a47ebebdfeeb24a7fcc5a8a&units=metric`)
      setOneCountry(data)
      console.log(deneme.length)
   }

   const twoFetch = async() => {
    let deneme = ["ankara","madrid","rome","paris","berlin","Vienna","Baku","Minsk","Athens","Budapest","Tokyo","Seoul","Riga","Vilnius","Amsterdam","Oslo","Lisbon","Kiev","Belgrade","Stockholm","Bern","Singapore", "Canberra", "Brussels", "Sofia", "Havana", "	Helsinki", "Tbilisi", "Dublin", "Jerusalem", "Bishkek", "Monaco", "Belfast", "Lima", "Bratislava", "Bangkok", "Cardiff", "Caracas"]
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${deneme[twoNumber]}&appid=d9b7738c8a47ebebdfeeb24a7fcc5a8a&units=metric`)
    setTwoCountry(data)
 }

 const threeFetch = async() => {
  let deneme = ["ankara","madrid","rome","paris","berlin","Vienna","Baku","Minsk","Athens","Budapest","Tokyo","Seoul","Riga","Vilnius","Amsterdam","Oslo","Lisbon","Kiev","Belgrade","Stockholm","Bern","Singapore", "Canberra", "Brussels", "Sofia", "Havana", "	Helsinki", "Tbilisi", "Dublin", "Jerusalem", "Bishkek", "Monaco", "Belfast", "Lima", "Bratislava", "Bangkok", "Cardiff", "Caracas"]
  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${deneme[threeNumber]}&appid=d9b7738c8a47ebebdfeeb24a7fcc5a8a&units=metric`)
  setThreeCountry(data)
}

const fourFetch = async() => {
  let deneme = ["ankara","madrid","rome","paris","berlin","Vienna","Baku","Minsk","Athens","Budapest","Tokyo","Seoul","Riga","Vilnius","Amsterdam","Oslo","Lisbon","Kiev","Belgrade","Stockholm","Bern","Singapore", "Canberra", "Brussels", "Sofia", "Havana", "	Helsinki", "Tbilisi", "Dublin", "Jerusalem", "Bishkek", "Monaco", "Belfast", "Lima", "Bratislava", "Bangkok", "Cardiff", "Caracas"]
  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${deneme[fourNumber]}&appid=d9b7738c8a47ebebdfeeb24a7fcc5a8a&units=metric`)
  setFourCountry(data)
}

   useEffect(() => {
    
      oneFetch()
      twoFetch()
      threeFetch()
      fourFetch()
      
   },[])

  return (
    <>
      <div className='w-[70%] h-[150px]  rounded-lg  absolute bottom-1' >
        <div className='flex flex-row gap-9 justify-center'>

          <div className=' front backdrop-blur-0  rounded-3xl w-[320px] h-[160px]  shadow-lg shadow-black' >
            <div className='flex justify-center pt-3 font-extrabold '>{oneCountry?.name}</div>   
            <div className='flex justify-center pt-2 font-extrabold '>{oneCountry?.main.temp}°C</div> 
            <div className='flex justify-center  '><img className='w-[100px]' src={`icons/${oneCountry?.weather[0].icon}.svg`}/></div>
          </div>

          <div className='backdrop-blur-0 rounded-3xl w-[320px] h-[160px]  shadow-lg shadow-black'>
            <div className='flex justify-center pt-3 font-extrabold'>{twoCountry?.name}</div>   
            <div className='flex justify-center pt-2 font-extrabold'>{twoCountry?.main.temp}°C</div> 
            <div className='flex justify-center'><img className='w-[100px]' src={`icons/${twoCountry?.weather[0].icon}.svg`}/></div> 
          </div>

          <div className='backdrop-blur-0 rounded-3xl w-[320px] h-[160px]  shadow-lg shadow-black'>
            <div className='flex justify-center pt-3 font-extrabold'>{threeCountry?.name}</div>   
            <div className='flex justify-center pt-2 font-extrabold'>{threeCountry?.main.temp}°C</div>
            <div className='flex justify-center'><img className='w-[100px]' src={`icons/${threeCountry?.weather[0].icon}.svg`}/></div>  
          </div>

          <div className='backdrop-blur-0 rounded-3xl w-[320px] h-[160px] shadow-lg shadow-black'>
            <div className='flex justify-center pt-3 font-extrabold'>{fourCountry?.name}</div>   
            <div className='flex justify-center pt-2 font-extrabold'>{fourCountry?.main.temp}°C </div> 
            <div className='flex justify-center'><img className='w-[100px]' src={`icons/${fourCountry?.weather[0].icon}.svg`}/></div> 
          </div>
        </div>
      </div>  
       
    </>
  )
}

export default Days
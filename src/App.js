
import axios from 'axios'
import {useState,useEffect} from 'react'
import {mainContext} from './Context';
import Home from './components/Home'



function App() {

  const [cityData,setCityData] = useState()
  const [searchValue,setSearchValue] = useState()


  const dataFetch = async() => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d9b7738c8a47ebebdfeeb24a7fcc5a8a&units=metric`)

    setCityData(data)

  }

  console.log(cityData)


  useEffect(() => {
    
    dataFetch()

  }, [searchValue])


  const Data = {
      cityData,setCityData,
      searchValue,setSearchValue
  }
  

  return (
     <mainContext.Provider value={Data}>

      <div>
        <Home />
      </div>

     </mainContext.Provider>
  )
}

export default App
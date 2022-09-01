
import axios from 'axios'
import {useState,useEffect} from 'react'
import {mainContext} from './Context';
import Home from './components/Home'

const autoCompleteURL = "https://api.weatherapi.com/v1/search.json?key=9c5155a62a494c12be3170247220109&q="
const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=9c5155a62a494c12be3170247220109&q=${city}&days=5&aqi=no&alerts=no`


function App() {

  const [cityDetails,setCityDetails] = useState()
  const [city,setCity] = useState("")
  const [clicked,setClicked] = useState(false)

  const [citySuggestion,setCitySuggestion] = useState([])



  useEffect(() => {

   

      const fetchCitySuggestion = async () => {
        const resp = await fetch(autoCompleteURL + city)
        const data = await resp.json()
        const citySuggestionData = data.map(curData => `${curData.name}, ${curData.region} ,${curData.country}`)
        setCitySuggestion(citySuggestionData)
  
      }
  
      if(!clicked && city.length > 2 ) {
        fetchCitySuggestion()
  
      } else {
        setCitySuggestion([])
        setClicked(false)
      }
      


  }, [city])



  const Data = {
    autoCompleteURL,
    
    city,
    setCity,
    citySuggestion,
    setCitySuggestion,
    clicked,setClicked,
    cityDetails,setCityDetails
  }
  



  return (
     <mainContext.Provider value={Data}>


       


          <Home />
          

        

     </mainContext.Provider>
  )
}

export default App
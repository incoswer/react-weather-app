import * as axios from 'axios'

const API_KEY = '1ce0eeec1b1d5b6eb19aa78140e14bbb'
const DefaultRoute = 'https://api.openweathermap.org/data/2.5/'


/*export const getWeather = async (city)=>{
    return await fetch(`${DefaultRoute}weather?q=${city}&appid=${API_KEY}`).then(res => res.json()).then(result=>{
       return result.weather.main
    })
}*/

/*

export const getWeather = async (city,metric='metric')=>{
     return await axios.get(`${DefaultRoute}weather?q=${city}&units=${metric}&appid=${API_KEY}`)
}

*/

const instance = axios.create({
     baseURL:'https://api.openweathermap.org/data/2.5/',

})

export const weatherAPI={
      getWeatherOfName(city,metric){
          return axios.get(`${DefaultRoute}weather?q=${city}&units=${metric}&appid=${API_KEY}`)
     }
}
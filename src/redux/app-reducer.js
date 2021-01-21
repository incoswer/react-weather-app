import {CNAHGE_IS_READY, ERROR_DATA, SET_WEATHER_DATA} from "./actionTypes";
import {weatherAPI} from "../api/api";
import {getCookie} from "../common/getCookie";


const initialState = {
    recentCity: getCookie('recentCity'),
    isReady: false,
    errorMessage:null,
    error:false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                ...action.payload,
                isReady: action.isReady
            }
        case ERROR_DATA:
            return{
                ...state,
                error: action.error,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export const setCityData = (data) => ({
    type: SET_WEATHER_DATA,
    payload: data,
    isReady: true
})

export const errorData=(error)=>({
    type: ERROR_DATA,
    errorMessage: error,
    error:true
})

export const getWeather = (nameCity, metric = 'metric') => async dispatch => {
    let data = await weatherAPI.getWeatherOfName(nameCity, metric).then(res => res.data)
    if (data.cod === 200) {
        dispatch(setCityData(data))
    }else{
        dispatch(errorData(data.message))
    }
}


export default appReducer


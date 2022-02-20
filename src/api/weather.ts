import axios from "axios"
import {setCurrentWeather, setForecastWeather} from "../store/reducers/weatherReducer"
import {setLoading} from "../store/reducers/settingReducer"
import {getCityNameRU} from "./city"
import {setTimeZone} from "../store/reducers/cityReducer"
import {Day, DayWeather} from "../types/weather"
import {Dispatch} from "redux"

const API_KEY = "826b8c6950aebc66c8a7b914f0a8fb38"

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

api.interceptors.request.use(config => {
    config.url = config.url + "&units=metric" + "&lang=ru" + "&appid=" + API_KEY
    return config
})

export const getCurrentWeather = (cityCode: string) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true))
        const {data} = await api.get(`weather?q=${cityCode}`)
        const currentWeather: DayWeather = {
            dt: data.dt,
            temp: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            pressure: data.main.pressure,
            windSpeed: Math.round(data.wind.speed),
            condition: data.weather[0].description,
            conditionCode: data.weather[0].icon
        }
        dispatch(setCurrentWeather(currentWeather))
        const {lon, lat} = data.coord
        dispatch(getForecastWeather(lat, lon))
        dispatch(getCityNameRU(data.name))
        dispatch(setLoading(false))
    }
}

export const getForecastWeather = (latitude: string, longitude:string) => {
    return async (dispatch: Dispatch<any>) => {
        const {data} = await api.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts`)
        let daily: DayWeather[] = []
        for (let i = 1; i < 8; i++) {
            const day: Day = data.daily[i]
            daily.push({
                dt: day.dt,
                temp: Math.round(day.temp.day),
                feels_like: Math.round(day.feels_like.day),
                pressure: day.pressure,
                windSpeed: Math.round(day.wind_speed),
                condition: day.weather[0].description,
                conditionCode : day.weather[0].icon
            })
        }
        dispatch(setForecastWeather(daily))
        dispatch(setTimeZone(data.timezone))
    }
}
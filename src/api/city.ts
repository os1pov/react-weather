import axios from "axios"
import {setCities, setCityName} from "../store/reducers/cityReducer"
import {Dispatch} from "redux"

const API_KEY = "&appid=826b8c6950aebc66c8a7b914f0a8fb38"

export const getCities = () => {
    return async (dispatch: Dispatch) => {
        const {data: cities} = await axios.get("http://localhost:3000/russianCities.json")
        dispatch(setCities(cities))
    }
}

export const getCityNameRU = (name: string) => {
    return async (dispatch: Dispatch) => {
        const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}` + API_KEY)
        const cityNameRU = data[0].local_names["ru"]
        dispatch(setCityName(cityNameRU))
    }
}
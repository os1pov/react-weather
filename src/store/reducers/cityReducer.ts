import {
    City, CityState, CityAction,
    SelectCityCodeAction, SelectCityNameAction, SetCitiesAction, SetTimeZoneAction
} from "../../types/city"

const SET_CITIES = "SET_CITIES"
const SET_CITY_CODE = "SET_CITY_CODE"
const SET_CITY_NAME = "SET_CITY_NAME"
const SET_TIME_ZONE = "SET_TIME_ZONE"

const initState: CityState = {
    cities: [],
    cityCode: "101000",
    cityName: "Москва",
    timeZone: "Europe/Moscow"
}

export const cityReducer = (state = initState, action: CityAction): CityState => {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case SET_CITY_CODE:
            return {
                ...state,
                cityCode: action.payload
            }
        case SET_CITY_NAME:
            return {
                ...state,
                cityName: action.payload
            }
        case SET_TIME_ZONE:
            return {
                ...state,
                timeZone: action.payload
            }
        default:
            return state
    }
}

export const setCities = (cities: City[]): SetCitiesAction => ({
    type: SET_CITIES,
    payload: cities
})

export const setCityCode = (cityCode: string): SelectCityCodeAction => ({
    type: SET_CITY_CODE,
    payload: cityCode
})

export const setCityName = (cityName: string): SelectCityNameAction => ({
    type: SET_CITY_NAME,
    payload: cityName
})

export const setTimeZone = (timeZone: string): SetTimeZoneAction => ({
    type: SET_TIME_ZONE,
    payload: timeZone
})
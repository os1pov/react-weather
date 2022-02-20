import {
    DayWeather, WeatherState, WeatherAction,
    SetCurrentWeatherAction, SetForecastWeatherAction, SetSelectedDayWeatherAction
} from "../../types/weather"

const SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER"
const SET_SELECTED_DAY_WEATHER = "SET_SELECTED_DAY_WEATHER"
const SET_FORECAST_WEATHER = "SET_FORECAST_WEATHER"

const initState: WeatherState = {
    currentWeather: {
        dt: null,
        temp: null,
        feels_like: null,
        pressure: null,
        windSpeed: null,
        condition: null,
        conditionCode : null
    },
    selectedDayWeather: {
        dt: null,
        temp: null,
        feels_like: null,
        pressure: null,
        windSpeed: null,
        condition: null,
        conditionCode : null
    },
    forecastWeather: []
}

export const weatherReducer = (state = initState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
                selectedDayWeather: {...state.selectedDayWeather},
                forecastWeather: state.forecastWeather.map(obj => ({...obj}))
            }
        case SET_SELECTED_DAY_WEATHER:
            return {
                ...state,
                currentWeather: {...state.currentWeather},
                selectedDayWeather: action.payload,
                forecastWeather: state.forecastWeather.map(obj => ({...obj}))
            }
        case SET_FORECAST_WEATHER:
            return {
                ...state,
                currentWeather: {...state.currentWeather},
                selectedDayWeather: {...state.selectedDayWeather},
                forecastWeather: action.payload
            }
        default:
            return state

    }
}

export const setCurrentWeather = (data: DayWeather): SetCurrentWeatherAction => ({
    type: SET_CURRENT_WEATHER,
    payload: data
})

export const setSelectedDayWeather = (data: DayWeather): SetSelectedDayWeatherAction => ({
    type: SET_SELECTED_DAY_WEATHER,
    payload: data
})

export const setForecastWeather = (data: DayWeather[]): SetForecastWeatherAction => ({
    type: SET_FORECAST_WEATHER,
    payload: data
})
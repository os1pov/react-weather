export interface Day {
    dt : number
    temp: { "day": number },
    feels_like: { "day": number },
    pressure: number,
    wind_speed: number,
    weather: [
        {
            description: string,
            icon: string
        }
    ]
}

export interface DayWeather {
    dt: number | null
    temp: number | null
    feels_like: number | null
    pressure: number | null
    windSpeed: number | null
    condition: string | null
    conditionCode: string | null
}

export interface WeatherState {
    currentWeather: DayWeather
    selectedDayWeather: DayWeather
    forecastWeather: DayWeather[]
}

export interface SetCurrentWeatherAction {
    type: "SET_CURRENT_WEATHER"
    payload: DayWeather
}

export interface SetSelectedDayWeatherAction {
    type: "SET_SELECTED_DAY_WEATHER"
    payload: DayWeather
}

export interface SetForecastWeatherAction {
    type: "SET_FORECAST_WEATHER"
    payload: DayWeather[]
}

export type WeatherAction = SetCurrentWeatherAction | SetForecastWeatherAction | SetSelectedDayWeatherAction
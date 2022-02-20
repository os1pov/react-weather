export interface City {
    cityName: string
    cityCode: string
}

export interface CityState {
    cities: City[]
    cityCode: string
    cityName: string
    timeZone: string
}

export interface SetCitiesAction {
    type: "SET_CITIES"
    payload: City[]
}

export interface SelectCityCodeAction {
    type: "SET_CITY_CODE"
    payload: string
}

export interface SelectCityNameAction {
    type: "SET_CITY_NAME"
    payload: string
}

export interface SetTimeZoneAction {
    type: "SET_TIME_ZONE"
    payload: string
}

export type CityAction = SetCitiesAction | SelectCityCodeAction | SelectCityNameAction | SetTimeZoneAction
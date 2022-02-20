import {combineReducers} from "redux"
import {cityReducer} from "./cityReducer"
import {weatherReducer} from "./weatherReducer"
import {settingReducer} from "./settingReducer"

export const rootReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    setting: settingReducer
})

export type RootState = ReturnType<typeof rootReducer>
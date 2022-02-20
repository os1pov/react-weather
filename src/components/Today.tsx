import React from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import WeatherInfo from "./WeatherInfo"
import SvgSelector from "../assets/icons/SvgSelector"
import "../styles/Today.scss"

export const Today = () => {
    const currentWeather = useTypedSelector(state => state.weather.currentWeather)
    const {dt, temp, conditionCode} = currentWeather
    const {cityName, timeZone} = useTypedSelector(state => state.city)
    let cityTime
    if (dt) {
        const [hours, minutes] = new Date().toLocaleTimeString("ru", {timeZone}).split(":")
        cityTime = `${hours}:${minutes}`
    }

    return (
        <div className="today">
            <div className="today__info">
                <div>
                    <div className="today__temp">{temp}°</div>
                    <div className="today__name">Сегодня</div>
                    <div className="today__time">
                        Время: <span>{cityTime}</span>
                    </div>
                    <div className="today__city">
                        Город: <span>{cityName}</span>
                    </div>
                </div>
                <SvgSelector id={conditionCode} />
            </div>
            <div className="today__weather__info">
                <WeatherInfo weatherInfo={currentWeather}/>
            </div>
        </div>
    )
}

export default Today
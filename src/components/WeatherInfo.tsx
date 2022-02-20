import React from "react"
import SvgSelector from "../assets/icons/SvgSelector"
import {DayWeather} from "../types/weather"
import "../styles/WeatherInfo.scss"

interface Props {
    weatherInfo: DayWeather
}

export const WeatherInfo = ({weatherInfo}: Props) => {
    const {temp, feels_like, pressure, windSpeed, condition} = weatherInfo

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${temp === feels_like ? `${temp}°` : `${temp}° - ощущается как ${feels_like}°`}`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${pressure} мм ртутного столба`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${condition}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${windSpeed} м/с`,
        },
    ]

    return (
        <div>
            {items.map(item =>
                <div className="weather__info__item">
                    <div className="weather__info__svg">
                        <SvgSelector id={item.icon_id} />
                    </div>
                    <div className="weather__info__name">{item.name}</div>
                    <div className="weather__info__value">{item.value}</div>
                </div>
            )}
        </div>
    )
}

export default WeatherInfo
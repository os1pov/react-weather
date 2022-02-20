import React, {useState} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector"
import Card from './Card'
import {DayWeather} from "../types/weather"
import "../styles/Days.scss"

export const Days = () => {
    const [opacity, setOpacity] = useState(0)
    const [transform, setTransform] = useState("translateY(-150%)")
    const [arrow, setArrow] = useState("˅")
    const days = useTypedSelector(state => state.weather.forecastWeather)

    const onChangeDisplay = () => {
        opacity === 0 ? setOpacity(1) : setOpacity(0)
        transform === "translateY(-150%)" ? setTransform("translateY(0%)") : setTransform("translateY(-150%)")
        arrow === "˅" ? setArrow("˄") : setArrow("˅")
    }

    return (
        <div className="wrapper__days">
            <div className="tab" onClick={onChangeDisplay}>
                <span>Прогноз погоды на ближайшие 7 дней</span>
                <span className="arrow">{arrow}</span>
            </div>
            <div className="days" style={{transform, opacity}}>
                {days.map((day: DayWeather) => (
                    <Card dayWeather={day} key={day.dt} />
                ))}
            </div>
        </div>
    )
}

export default Days
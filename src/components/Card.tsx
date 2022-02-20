import React from "react"
import {setSelectedDayWeather} from "../store/reducers/weatherReducer"
import {setPopupTransform, setPopupVisibility} from "../store/reducers/settingReducer"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "../hooks/useTypedSelector"
import SvgSelector from "../assets/icons/SvgSelector"
import {DayWeather} from "../types/weather"
import "../styles/Card.scss"

interface Props {
    dayWeather: DayWeather
}

export const Card = ({ dayWeather }: Props) => {
    const {dt, temp, condition, conditionCode} = dayWeather
    const timeZone = useTypedSelector(state => state.city.timeZone)
    const dispatch = useDispatch()
    let date, weekday
    if (dt) {
        [weekday, date] = new Date(dt * 1000).toLocaleDateString("ru", {
            timeZone,
            weekday: "short",
            month: 'long',
            day: 'numeric'
        }).split(",")
    }

    const showPopup = () => {
        dispatch(setSelectedDayWeather(dayWeather))
        dispatch(setPopupVisibility("visible"))
        dispatch(setPopupTransform("translateY(0%)"))
    }

    return (
        <div className="card" onClick={showPopup}>
            <div className="card__weekday">{weekday}</div>
            <div className="card__date">{date}</div>
            <div className="card__svg">
                <SvgSelector id={conditionCode}/>
            </div>
            <div className="card__temp">{temp}° днем</div>
            <div className="card__weather_info">{condition}</div>
        </div>
    )
}

export default Card
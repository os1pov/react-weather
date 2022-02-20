import React from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useDispatch} from "react-redux"
import {setPopupTransform, setPopupVisibility} from "../store/reducers/settingReducer"
import WeatherInfo from "./WeatherInfo"
import SvgSelector from "../assets/icons/SvgSelector"
import "../styles/Popup.scss"

export const Popup = () => {
    const selectedDayWeather = useTypedSelector(state => state.weather.selectedDayWeather)
    const {dt, temp, conditionCode} = selectedDayWeather
    const {visibility, transform} = useTypedSelector(state => state.setting)
    const {cityName, timeZone} = useTypedSelector(state => state.city)
    let date, weekday
    if (dt) {
        [weekday, date] = new Date(dt * 1000).toLocaleDateString("ru", {
            timeZone,
            weekday: "long",
            month: 'long',
            day: 'numeric'
        }).split(",")
    }
    const dispatch = useDispatch()

    const closePopup = () => {
        dispatch(setPopupVisibility("hidden"))
        dispatch(setPopupTransform("translateY(-200%)"))
    }

    return (
        <div className="popup" style={{visibility}} onClick={closePopup}>
            <div className="popup__content" style={{transform}} onClick={event => event.stopPropagation()}>
                <div className="selected_day">
                    <div className="selected_day__temp">{temp}°</div>
                    <div className="selected_day__weekday">{weekday}</div>
                    <div className="selected_day__svg">
                        <SvgSelector id={conditionCode} />
                    </div>
                    <div className="selected_day__date">
                        Дата: <span>{date}</span>
                    </div>
                    <div className="selected_day__city">
                        Город: <span>{cityName}</span>
                    </div>
                </div>
                <WeatherInfo weatherInfo={selectedDayWeather} />
                <div className="popup__close" onClick={closePopup}>
                    <SvgSelector id="close" />
                </div>
            </div>
        </div>
    )
}

export default Popup
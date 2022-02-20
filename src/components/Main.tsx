import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {getCurrentWeather} from "../api/weather"
import {useTypedSelector} from "../hooks/useTypedSelector"
import Loading from "./Loading"
import Popup from "./Popup"
import Today from "./Today"
import Days from "./Days"

const Main = () => {
    const cityCode = useTypedSelector(state => state.city.cityCode)
    const isLoading = useTypedSelector(state => state.setting.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentWeather(cityCode))
    },[cityCode])

    if (isLoading) return <Loading />

    return (
        <div className="main">
            <Popup />
            <Today />
            <Days />
        </div>
    )
}

export default Main
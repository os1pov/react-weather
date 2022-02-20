import React, {useEffect} from "react"
import {changeCssRootVariables} from "../store/reducers/settingReducer"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {getCities} from "../api/city"
import {setCityCode} from "../store/reducers/cityReducer"
import Select from "react-select"
import SvgSelector from "../assets/icons/SvgSelector"
import {Theme} from "../types/setting"
import "../styles/Header.scss"

const Header = () => {
    const theme = useTypedSelector(state => state.setting.theme)
    const {cities, cityCode, cityName} = useTypedSelector(state => state.city)
    const options = cities.map(city => ({value: city.cityCode, label: city.cityName}))
    const defaultValue = {value: cityCode, label: cityName}
    const dispatch = useDispatch()

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor:
                theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '210px',
            height: '40px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme === Theme.DARK ? '#fff' : '#000',
        }),
    }

    useEffect(() => {
        dispatch(getCities())
    },[])

    const changeTheme = () => {
        dispatch(changeCssRootVariables(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT ))
    }

    const changeCity = (cityCode: string) => {
        dispatch(setCityCode(cityCode))
    }

    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <SvgSelector id="header_logo" />
                </div>
                <div className="header__title">REACT WEATHER</div>
            </div>
            <div className="header__wrapper">
                <div className="header__change_theme" onClick={changeTheme}>
                    <SvgSelector id="change_theme" />
                </div>
                <Select
                    defaultValue={defaultValue}
                    options={options}
                    onChange={(e: any) => changeCity(e.value)}
                    styles={colourStyles}
                    noOptionsMessage={() => "ничего не найдено"}
                />
            </div>
        </div>
    )
}

export default Header
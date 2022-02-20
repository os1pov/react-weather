import {
    SettingState, SettingAction, Theme, ThemeAction,
    LoadingAction, PopupTransformAction, PopupVisibilityAction
} from "../../types/setting"
import {Dispatch} from "redux"

const SET_THEME = "SET_THEME"
const SET_LOADING = "SET_LOADING"
const SET_POPUP_VISIBILITY = "SET_POPUP_VISIBILITY"
const SET_POPUP_TRANSFORM = "SET_POPUP_TRANSFORM"

const initState: SettingState = {
    theme: Theme.LIGHT,
    isLoading: false,
    visibility: "hidden",
    transform: "translateY(-200%)"
}

export const settingReducer = (state = initState, action: SettingAction): SettingState => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_POPUP_VISIBILITY:
            return {
                ...state,
                visibility: action.payload
            }
        case SET_POPUP_TRANSFORM:
            return {
                ...state,
                transform: action.payload
            }
        default:
            return state
    }
}

export const setLoading = (isLoading: boolean): LoadingAction => ({
    type: SET_LOADING,
    payload: isLoading
})

export const setPopupVisibility = (visibility: "hidden" | "visible"): PopupVisibilityAction => ({
    type: SET_POPUP_VISIBILITY,
    payload: visibility
})

export const setPopupTransform = (transform: "translateY(-200%)" | "translateY(0%)"): PopupTransformAction => ({
    type: SET_POPUP_TRANSFORM,
    payload: transform
})

export const setTheme = (theme: Theme): ThemeAction => ({
    type: SET_THEME,
    payload: theme
})

export const changeCssRootVariables = (theme: Theme) => {
    return (dispatch: Dispatch<ThemeAction>) => {
        const root = document.querySelector(':root') as HTMLElement

        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
        ]

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme})`
            )
        })
        dispatch(setTheme(theme))
    }
}
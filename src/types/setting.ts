export enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

export interface SettingState {
    theme: Theme
    isLoading: boolean
    visibility: "hidden" | "visible"
    transform: "translateY(-200%)" | "translateY(0%)"
}

export interface ThemeAction {
    type: "SET_THEME"
    payload: Theme
}

export interface LoadingAction {
    type: "SET_LOADING"
    payload: boolean
}

export interface PopupVisibilityAction {
    type: "SET_POPUP_VISIBILITY"
    payload: "hidden" | "visible"
}

export interface PopupTransformAction {
    type: "SET_POPUP_TRANSFORM"
    payload: "translateY(-200%)" | "translateY(0%)"
}

export type SettingAction = ThemeAction | LoadingAction | PopupVisibilityAction | PopupTransformAction
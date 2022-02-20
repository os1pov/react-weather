import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import Main from "./Main"

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={ <Main /> }/>
            </Routes>
        </div>
    )
}

export default App
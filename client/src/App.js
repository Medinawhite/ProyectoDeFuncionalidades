import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home.js'
import './app.css'
import Navbars from './components/navbar.js'
import Footer from "./components/Footer.js"
import Formularios from "./components/formularios/Formularios.js"
import Countdowns from "./components/funcionalidades/Countdown.js"
function App() {
    return(
        <BrowserRouter>
                <Navbars/>
                <Route exact path="/" component={Home} />
                <Route exact path="/form" component={Formularios} />
                <Route exact path="/countdown" component={Countdowns} />
                <Footer/>
        </BrowserRouter>
    )
}

export default App;
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home.js'


function App() {
    return(
        <BrowserRouter>
            <div className='App' >
                {/* <Home/> */}
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
    )
}

export default App;
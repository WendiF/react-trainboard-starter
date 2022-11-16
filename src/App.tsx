import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Station from './components/Station';
import Stations from './components/Stations';
import StationSelection from './components/StationSelection';

const App = () => (
    <BrowserRouter>
        <div className = "App">
            <h2> Departure Station </h2>
            <StationSelection/>
            <h2> Arrival Station </h2>
            <StationSelection/>
            <Routes>
                <Route path = "/stations">
                    <Route path = ":id" element = { <Station/> }/>
       
                    <Route index element = { <Stations/> }/>
                </Route>
            </Routes>
            <footer>
                <Link to = "/stations">Stations</Link>
            </footer>
        </div>
    </BrowserRouter>
);

export default App;

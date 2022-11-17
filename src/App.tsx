import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RouteButton  from './components/RouteButton';
import Station from './components/Station';
import Stations from './components/Stations';
import StationSelection from './components/StationSelection';
import UserPrompt from './components/UserPrompt';

const App = () => (
    <BrowserRouter>
        <div className = "App">
            <UserPrompt/>
            <Routes>
                <Route path = "/stations">
                    <Route path = ":id" element = { <Station/> }/>
       
                    <Route index element = { <Stations/> }/>
                </Route>
            </Routes>
=            <footer>
                <Link to = "/stations">Stations</Link>
            </footer>
        </div>
    </BrowserRouter>
);

export default App;

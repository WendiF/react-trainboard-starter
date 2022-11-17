import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './components/ContextProvider';
import Station from './components/Station';
import Stations from './components/Stations';
import UserPrompt from './components/UserPrompt';

const App = () => (
    <BrowserRouter>
        <div className = "App">
            <ContextProvider>
                <UserPrompt/>
            </ContextProvider>
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

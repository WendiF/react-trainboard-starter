import React from 'react';
import { myContext } from './ContextProvider';

const RouteButton: React.FC<unknown> = () => {
    const { departure, arrival } = React.useContext(myContext);
    const hyperlink = "https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/"
    + departure.code + "/" + arrival.code + "/#LiveDepResults";

    return (
        <div>
            <a href={hyperlink}>
                <button onClick = { (e) => getStations(e, departure.code, arrival.code) } type = "button">Click</button>
            </a>
        </div>
    );
};

const getStations = (e: any, departure: string, arrival: string) => {
    console.log(departure, arrival);
};
export default RouteButton;
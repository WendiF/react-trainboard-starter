import React, { createContext, Dispatch, useEffect, useState } from 'react';

// create context
//const DepartureContext = createContext({
//    departure: "",
//    setDeparture: (departure: string) => {}
//});
// const ArrivalContext = createContext({
//     arrival: "",
//     setArrival: (arrival: string) => {}
// });

type Format = {
    value: [string, Dispatch<string>];
    value2: [string, Dispatch<string>];
}

const input: Format = { value: ['', () => {return;}], value2: ['', () => {return;}] };

const myContext = React.createContext(input);

const ContextProvider = ({ children }: { children: any }) => {
    // the values that will be given to the context
    const [departure, setDeparture] = useState('EUS');
    const [arrival, setArrival] = useState('EUS2');

    return (
        // the Provider gives access to the context to its children
        <myContext.Provider value = { { value: [departure, setDeparture], value2: [arrival, setArrival] } }>
            {children}
        </myContext.Provider>
    );
};

export { myContext, ContextProvider };
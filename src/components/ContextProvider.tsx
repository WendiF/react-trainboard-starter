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
    value: [string, Dispatch<React.SetStateAction<string>>];
    value2: [string, Dispatch<React.SetStateAction<string>>];
}

const input: any = {
    departure: {
        code: 'OK', setCode: (code: string) => undefined,
    }, arrival: {
        code: 'OK', setCode: (code: string) => undefined,
    },
};

const myContext = React.createContext(input);

const ContextProvider = ({ children }: { children: any }) => {
    // the values that will be given to the context
    const [departure, setDeparture] = useState('EUS');
    const [arrival, setArrival] = useState('EUS2');

    return (
        // the Provider gives access to the context to its children
        <myContext.Provider value = { { departure: { code: departure, setCode: setDeparture }, arrival:  { code: arrival, setCode: setArrival } } }>
            {children}
        </myContext.Provider>
    );
};

export { myContext, ContextProvider };
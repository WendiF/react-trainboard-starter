import React, { useState } from 'react';

const defaultContextValue: any = {
    departure: {
        code: 'OK', setCode: (code: string) => undefined,
    }, arrival: {
        code: 'OK', setCode: (code: string) => undefined,
    },
};

const myContext = React.createContext(defaultContextValue);

const ContextProvider = ({ children }: { children: any }) => {

    const [departure, setDeparture] = useState('EUS');
    const [arrival, setArrival] = useState('EUS');

    return (
        // the Provider gives access to the context to its children
        <myContext.Provider value = { { departure: { code: departure, setCode: setDeparture }, arrival:  { code: arrival, setCode: setArrival } } }>
            {children}
        </myContext.Provider>
    );
};

export { myContext, ContextProvider };
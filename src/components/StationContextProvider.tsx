import React, { useState } from 'react';

const defaultContextValue: any = {
    departure: {
        code: 'OK', setCode: (code: string) => undefined,
    }, arrival: {
        code: 'OK', setCode: (code: string) => undefined,
    },
};

const StationContext = React.createContext(defaultContextValue);

const StationContextProvider = ({ children }: { children: any }) => {

    const [departure, setDeparture] = useState('EUS');
    const [arrival, setArrival] = useState('EUS');

    return (
        // the Provider gives access to the context to its children
        <StationContext.Provider value = { { departure: { code: departure, setCode: setDeparture }, arrival:  { code: arrival, setCode: setArrival } } }>
            {children}
        </StationContext.Provider>
    );
};

export { StationContext, StationContextProvider };
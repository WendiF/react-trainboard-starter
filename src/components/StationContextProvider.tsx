import React, { useState } from 'react';

const StationContext = React.createContext({
    departure: {
        code: '', setCode: (code: string) => undefined,
    }, arrival: {
        code: '', setCode: (code: string) => undefined,
    },
} as any);

const StationContextProvider = ({ children }: { children: any }) => {

    const [departure, setDeparture] = useState('EUS');
    const [arrival, setArrival] = useState('EUS');

    return (
        // the Provider gives access to the context to its children
        <StationContext.Provider value = { {
            departure: { code: departure, setCode: setDeparture },
            arrival: { code: arrival, setCode: setArrival },
        } }>
            {children}
        </StationContext.Provider>
    );
};

export { StationContext, StationContextProvider };
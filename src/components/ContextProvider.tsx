import React, { createContext, useState, useEffect } from "react";

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
    value: [string, Function],
    value2: [string, Function]
}

let input: Format = {value: ["", () => {}], value2: ["", () => {}]};

const myContext = React.createContext(input);

const ContextProvider = ({ children }: { children: any }) => {
    // the values that will be given to the context
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");

    return (
        // the Provider gives access to the context to its children
        <myContext.Provider value={{value: [departure, setDeparture], value2: [arrival, setArrival]}}>
            {children}
        </myContext.Provider>
    );
};

export { myContext, ContextProvider };
import React from 'react';
import RootStore from '../Stores/RootStore';

const RootStateContext = React.createContext(null);

export function RootStateProvider({children}) {
    const stores = new RootStore();

    return (
        <RootStateContext.Provider value={stores}>
            {children}
        </RootStateContext.Provider>
    );
}

export function useRootStore() {
    return React.useContext(RootStateContext);
}
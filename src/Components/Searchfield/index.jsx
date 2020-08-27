import React from 'react';
import './styles.css';
import { useRootStore } from '../../Context/RootStateContext';

function Searchfield() {
    const rootStore = useRootStore();
    const { vehicleModel: { listViewStore } } = rootStore;

    return (
        <div>
            <h2>Find a car</h2>
            <input
                className="text-input"
                onChange={listViewStore.changeSearchText}
                type="search"
                placeholder="Search"
                defaultValue={listViewStore.searchText}
            />
        </div>
    );
}

export default Searchfield;

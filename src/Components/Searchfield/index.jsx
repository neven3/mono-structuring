import React from 'react';
import './styles.css';
import { useRootStore } from '../../Context/RootStateContext';

function Searchfield() {
    const rootStore = useRootStore();
    const { changeSearchText, searchText } = rootStore;

    return (
        <div>
            <h2>Find a car</h2>
            <input
                className="text-input"
                onChange={changeSearchText}
                type="search"
                placeholder="Search"
                defaultValue={searchText}
            />
        </div>
    );
}

export default Searchfield;

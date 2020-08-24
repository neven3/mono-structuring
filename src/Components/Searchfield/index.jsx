import React from 'react';
import './styles.css';

function Searchfield(props) {
    return (
        <div>
            <h2>Find a car</h2>
            <input
                className="search"
                onChange={props.onChange}
                type="search"
                placeholder="Search"
                defaultValue={props.searchText}
            />
        </div>
    );
}

export default Searchfield;
import React from 'react';
import SortButton from '../SortButton';
import './styles.css';

function SortOption(props) {
    return (
        <div className="sort-option">
            <h3>Sort by {props.sortBy}</h3>
            <SortButton
                sortBy={props.sortBy}
                direction="ascending"
            />
            <SortButton
                sortBy={props.sortBy}
                direction="descending"
            />
        </div>
    );
}

export default SortOption;

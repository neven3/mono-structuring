import React from 'react';
import SortOption from '../SortOption';

function SortContainer() {
    return (
        <div>
            <SortOption sortBy="make" />
            <SortOption sortBy="model" />
        </div>
    );
}

export default SortContainer;

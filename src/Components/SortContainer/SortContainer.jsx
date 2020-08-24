import React from 'react';
import SortOption from '../SortOption';

function SortContainer() {
    return (
        <div>
             <SortOption
                // doOnSortClick={props.doOnSortClick} 
                sortBy="make"
            />
            <SortOption
                // doOnSortClick={props.doOnSortClick}
                sortBy="model"
            />
        </div>
    );
}

export default SortContainer;
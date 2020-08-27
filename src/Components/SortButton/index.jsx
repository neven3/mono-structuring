import React from 'react';
import './styles.css';
import { useRootStore } from '../../Context/RootStateContext';

function SortButton({ sortBy, direction }) {
    const rootStore = useRootStore();

    return(
        <button
            className="sort-button"
            onClick={() => rootStore.setSortParams(sortBy, direction)}
        >
            Sort {direction}
        </button>
    );
}

export default SortButton;

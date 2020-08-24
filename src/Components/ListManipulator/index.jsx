import React from 'react';
import Searchfield from '../Searchfield';
import SortContainer from '../SortContainer/SortContainer';

function ListManipulator(props) {
    return (
        <div>
            <Searchfield 
                onChange={props.handleSearchfieldChange}
                placeholder="search"
                searchText={props.searchText}
            />
            <SortContainer 
                doOnSortClick={props.doOnSortClick}
            />
        </div>
    );
}

export default ListManipulator;
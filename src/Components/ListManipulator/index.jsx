import React from 'react';
import Searchfield from '../Searchfield';
import SortContainer from '../SortContainer';
import MakeSelector from '../MakeSelector';

function ListManipulator() {
    return (
        <div>
            <div>
                <Searchfield />
                <MakeSelector />
            </div>
            <SortContainer />
        </div>
    );
}

export default ListManipulator;

import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import ListManipulator from '../../Components/ListManipulator';
import CardList from '../../Components/CardList';
import Pagination from '../../Components/Pagination';
import { observer } from 'mobx-react';

function ListScreen() {
    return (
        <div className="Main">
            <h1>Cars</h1>
            <Link className="link edit" to="/edit">Edit a car</Link>
            <Link className="link add" to="/add">Add a car</Link>
            <ListManipulator />
            <CardList />
            <Pagination />
        </div>
    );
}

export default observer(ListScreen);

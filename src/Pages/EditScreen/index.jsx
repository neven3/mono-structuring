import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import CardList from '../../Components/CardList';

function Edit(props) {
    // console.log(props)
    return (
        <div className="screen">
            <h2>Edit a card</h2>
            <h3>Click on a card to edit it</h3>
            <Link to="/list">
                <button className="go-back-button">Go back to list</button>
            </Link>
            <CardList />
        </div>
    );
}

export default Edit;
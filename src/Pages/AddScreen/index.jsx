import React from 'react';
import { Link } from 'react-router-dom';
import AddCardForm from '../../Components/AddCardForm';
import './styles.css';

function AddScreen() {
    return (
        <div className="screen add-screen">
            <h2>Add a car</h2>
            <h3>Fill the fields to add a new car to the list</h3>
            <Link className="link" to="/list">
                <button className="go-back-button">Go back to list</button>
            </Link>
            <AddCardForm />
        </div>
    );
}

export default AddScreen;

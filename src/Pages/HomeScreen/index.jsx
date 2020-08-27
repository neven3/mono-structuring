import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="welcome">
            <h1>Hi, welcome to my test project!</h1>
            <Link to="/list">
                <button className="check-app">Check the app</button>
            </Link>
        </div>
    );
};

export default Home;

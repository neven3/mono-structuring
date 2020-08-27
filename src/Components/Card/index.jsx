import React from 'react';
import './styles.css';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import EditCardForm from '../EditCardForm';

function Card(props) {
    const [cardClicked, setCardClicked] = React.useState(false);
    const normalCard = (
        <div 
            className="card-container"
            onClick={() => props.location.pathname === '/edit' && setCardClicked(true)}
        >
            <h3 className="car-make">{props.car.make}</h3>
            <p>{props.car.model}</p>
        </div>
    );

    return (
        <div>
            {
                cardClicked
                    ? <EditCardForm setCardClicked={setCardClicked} car={props.car} />
                    : normalCard
            }
        </div>
    );
}

export default observer(withRouter(Card));

import React from 'react';
import './styles.css';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import EditCardForm from '../EditCardForm';
import { useRootStore } from '../../Context/RootStateContext';

function Card(props) {
    // const [cardClicked/* , setCardClicked */] = React.useState(false);

    const rootStore = useRootStore();
    const { /* vehicleMake,  */vehicleModel } = rootStore;

    const normalCard = (
        <div 
            className="card-container"
            onClick={() => {
                props.location.pathname === '/edit' && vehicleModel.editViewStore.toggleCardClicked(true)
                }
                }
        >
            <h3 className="car-make">{props.car.make}</h3>
            <p>{props.car.model}</p>
        </div>
    );

    return (
        <div>
            {
                vehicleModel.editViewStore.cardClicked
                    ? <EditCardForm /* setCardClicked={setCardClicked} */ car={props.car} />
                    : normalCard
            }
        </div>
    );
}

export default observer(withRouter(Card));

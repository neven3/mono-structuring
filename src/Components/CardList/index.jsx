import React from 'react';
import Card from '../Card';
import './styles.css';
import { observer } from 'mobx-react';
import { useRootStore } from '../../Context/RootStateContext';

function CardList() {
    const rootStore = useRootStore();
    const { vehicleModel } = rootStore;
    
    return (
        <div className='card-list'>
            {
               vehicleModel.listViewStore.currentCars.length
                    ? vehicleModel.listViewStore.currentCars.map(car => {
                        return (
                            <Card 
                                key={car.id}
                                car={car}
                            />
                        );
                    })
                    : <h3>No cars yet, please add some</h3>
            }
        </div>
    );
}

export default observer(CardList);

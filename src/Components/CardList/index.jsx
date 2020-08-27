import React from 'react';
import Card from '../Card';
import './styles.css';
import { observer } from 'mobx-react';
import { useRootStore } from '../../Context/RootStateContext';

function CardList() {
    const rootStore = useRootStore();
    
    return (
        <div className='card-list'>
            {
               rootStore.currentCars.length
                    ? rootStore.currentCars.map(car => {
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

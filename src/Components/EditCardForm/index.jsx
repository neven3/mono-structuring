import React from 'react';
import './styles.css'
import { useRootStore } from '../../Context/RootStateContext';
import { observer } from 'mobx-react';

function EditCardForm(props) {
    const rootStore = useRootStore();
    const { vehicleModel, vehicleMake } = rootStore;
    
    return (
        <div className="card-container edit-card">
            <form
                className="add-card-form"
                onSubmit={(e) => {
                    vehicleMake.editViewStore.onEditFormSubmit(props.car, e);
                    props.setCardClicked(false);
                }}
            >
                <label htmlFor="make">Make:</label>
                <input
                    className="text-input"
                    type="text"
                    id="make"
                    name="make"
                    placeholder={props.car.make}
                    onChange={(e) => vehicleMake.editViewStore.setMake(e.target.value)}
                />

                <label htmlFor="model">Model:</label>
                <input
                    className="text-input"
                    type="text"
                    placeholder={props.car.model}
                    id="model"
                    name="model"
                    onChange={(e) => vehicleModel.editViewStore.setModel(e.target.value)}
                />

                <button
                    className="check-app add"
                    type="submit"
                >
                        Edit car
                </button>
            </form>
        </div>
    );
};

export default observer(EditCardForm);

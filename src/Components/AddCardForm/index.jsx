import React from 'react';
import { useRootStore } from '../../Context/RootStateContext';
import makeInputBlank from '../../Common/makeInputBlank';
import './styles.css';

function AddCardForm() {
    const rootStore = useRootStore();
    const { vehicleModel, vehicleMake } = rootStore;
    
    function onFormSubmit(e) {
        e.preventDefault();
        makeInputBlank(e.target.make);
        makeInputBlank(e.target.model);
        vehicleMake.addCar(vehicleModel.model);
        vehicleMake.resetMake();
        vehicleModel.resetModel();
    }

    return (
        <div>
            <form
                className="add-card-form"
                onSubmit={onFormSubmit}
            >
                <label htmlFor="make">Make:</label>
                <input
                    className="text-input"
                    type="text"
                    id="make"
                    name="make"
                    onChange={(e) => vehicleMake.setMake(e.target.value)}
                    />

                <label htmlFor="model">Model:</label>
                <input
                    className="text-input"
                    type="text"
                    id="model"
                    name="model"
                    onChange={(e) => vehicleModel.setModel(e.target.value)}
                />

                <button
                    className="check-app add"
                    type="submit"
                >
                        Make car
                </button>
            </form>
        </div>
    );
}

export default AddCardForm;

import React from 'react';
import { useRootStore } from '../../Context/RootStateContext';
import './styles.css';

function AddCardForm() {
    const rootStore = useRootStore();
    const { vehicleModel, vehicleMake } = rootStore;
    
    return (
        <div>
            <form
                className="add-card-form"
                onSubmit={vehicleMake.addViewStore.onAddFormSubmit}
            >
                <label htmlFor="make">Make:</label>
                <input
                    className="text-input"
                    type="text"
                    id="make"
                    name="make"
                    onChange={(e) => vehicleMake.addViewStore.setMake(e.target.value)}
                />

                <label htmlFor="model">Model:</label>
                <input
                    className="text-input"
                    type="text"
                    id="model"
                    name="model"
                    onChange={(e) => vehicleModel.addViewStore.setModel(e.target.value)}
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

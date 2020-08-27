import React from 'react';
import './styles.css'
import makeInputBlank from '../../Common/makeInputBlank';
import { useRootStore } from '../../Context/RootStateContext';

function EditCardForm(props) {
    const rootStore = useRootStore();
    const { vehicleModel, vehicleMake } = rootStore;
    
    function onFormSubmit(e) {
        e.preventDefault();
        makeInputBlank(e.target.make);
        makeInputBlank(e.target.model);
        rootStore.changeCarSpec(props.car, vehicleMake.make, vehicleModel.model);
        vehicleMake.resetMake();
        vehicleModel.resetModel();
        props.setCardClicked(false);
    }

    return (
        <div className="card-container edit-card">
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
                    placeholder={props.car.make}
                    onChange={(e) => vehicleMake.setMake(e.target.value)}
                    />

                <label htmlFor="model">Model:</label>
                <input
                    className="text-input"
                    type="text"
                    placeholder={props.car.model}
                    id="model"
                    name="model"
                    onChange={(e) => vehicleModel.setModel(e.target.value)}
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

export default EditCardForm;

import React from 'react';
import { useRootStore } from '../../Context/RootStateContext';
import makeInputBlank from '../../Common/makeInputBlank';
import './styles.css';

function AddCardForm() {
    const rootStore = useRootStore();
    const { vehicleModel } = rootStore;
    const [carMake, setCarMake] = React.useState('');
    const [carModel, setCarModel] = React.useState('');
    
    function onFormSubmit(e) {
        console.log(rootStore.cars);
        e.preventDefault();
        // vehicleMake.setMake(carMake);
        makeInputBlank(e.target.make);
        makeInputBlank(e.target.model);
        vehicleModel.addCar(carMake, carModel);
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
                    onChange={(e) => setCarMake(e.target.value)}
                    />

                <label htmlFor="model">Model:</label>
                <input
                    className="text-input"
                    type="text"
                    id="model"
                    name="model"
                    onChange={(e) => setCarModel(e.target.value)}
                />

                <button className="check-app add" type="submit">Make car</button>
            </form>
        </div>
    );
}

export default AddCardForm;
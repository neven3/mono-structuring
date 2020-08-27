import { nanoid } from 'nanoid';
import { decorate, action } from 'mobx';
import makeInputBlank from '../../Common/makeInputBlank';

class AddViewStore {
    // add
    addCar = (make, model) => {
        if (make && model)
            this.vehicleModel.cars.push({ make, model, id: nanoid() });
    };

    // add and edit
    resetModel = () => this.vehicleModel.model = '';

    // add and edit
    setModel = (model) => {
        if (model !== '') {
            this.vehicleModel.model = model;
        }
    };

    onAddFormSubmit = (vehicleMakeStore, e) => {
        e.preventDefault();
        makeInputBlank(e.target.model);
        makeInputBlank(e.target.make);
        vehicleMakeStore.addCar(this.vehicleModel.model);
        vehicleMakeStore.resetMake();
        this.resetModel();
    };

    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }
}

decorate(AddViewStore, {
    addCar: action,
    setModel: action,
    resetModel: action,
    onAddFormSubmit: action,
});

export default AddViewStore;
import { nanoid } from 'nanoid';
import { decorate, action } from 'mobx';
import makeInputBlank from '../../Common/makeInputBlank';

class AddViewStore {
    addCar = (make, model) => {
        if (make && model)
            this.vehicleModel.cars.push({ make, model, id: nanoid() });
    };

    resetModel = () => this.vehicleModel.model = '';

    setModel = (model) => {
        if (model !== '') {
            this.vehicleModel.model = model;
        }
    };

    onAddFormSubmit = (vehicleMakeStore, e) => {
        e.preventDefault();
        makeInputBlank(e.target.model);
        makeInputBlank(e.target.make);
        vehicleMakeStore.addViewStore.addCar(this.vehicleModel.model);
        vehicleMakeStore.addViewStore.resetMake();
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

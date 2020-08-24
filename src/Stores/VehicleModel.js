import { nanoid } from 'nanoid';
import { decorate, observable, action } from "mobx";

class VehicleModel {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.model = '';
    }

    // add
    addCar = (make, model) => {
        if (make && model)
        this.rootStore.cars.push({ make, model, id: nanoid() });
    };

    // add and edit
    resetModel = () => this.model = '';
    
    // add and edit
    setModel = (model) => {
        if (model !== '') {
            this.model = model;
        }
    }
}

decorate(VehicleModel, {
    model: observable,
    addCar: action,
    setModel: action,
    resetModel: action,
});

export default VehicleModel;
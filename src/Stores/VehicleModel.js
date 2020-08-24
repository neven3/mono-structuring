import { nanoid } from 'nanoid';
import { decorate, observable, action } from "mobx";

class VehicleModel {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.model = '';
    }

    // addView
    addCar = (make, model) => {
        if (make && model)
        this.rootStore.cars.push({ make, model, id: nanoid() });
    };

    resetModel = () => this.model = '';
    
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
    // removeCar: action,
});

export default VehicleModel;
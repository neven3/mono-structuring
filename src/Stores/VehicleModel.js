import { nanoid } from 'nanoid';
import { decorate, observable, action } from "mobx";

class VehicleModel {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }


    // addView
    addCar = (make, model) => {
        this.rootStore.cars.push({ make, model, id: nanoid() });
    };

    // listView
    removeCar = (id) => {
        this.rootStore.cars.filter(car => car.id !== id);
    };
}

decorate(VehicleModel, {
    cars: observable,
    addCar: action,
    removeCar: action,
});

export default VehicleModel;
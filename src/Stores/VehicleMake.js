import { decorate, observable, action } from "mobx";

class VehicleMake {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.make = '';
    }

    // add
    addCar = (model) => {
        this.rootStore.vehicleModel.addCar(this.make, model);
    };

    // add and edit
    resetMake = () => this.make = '';

    // edit
    setMake = (make) => {
        if (make !== '') {
            this.make = make;
        }
    };
}

decorate(VehicleMake, {
    make: observable,
    addCar: action,
    resetMake: action,
    setMake: action,
});

export default VehicleMake;
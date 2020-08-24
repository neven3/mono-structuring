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

    resetMake = () => this.make = '';

    // edit
    setMake = (make) => {
        if (make !== '') {
            this.make = make;
        }
    };

    // list
    // what should I list here?
}

decorate(VehicleMake, {
    make: observable,
    addCar: action,
    resetMake: action,
    setMake: action,
});

export default VehicleMake;
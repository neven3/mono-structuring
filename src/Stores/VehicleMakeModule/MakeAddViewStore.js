import { decorate, action } from "mobx";

class AddViewStore {
    // add
    addCar = (model) => {
        this.vehicleMake.rootStore.vehicleModel.addViewStore.addCar(this.vehicleMake.make, model);
    };

    // add and edit
    resetMake = () => this.vehicleMake.make = '';

    // edit
    setMake = (make) => {
        if (make !== '') {
            this.vehicleMake.make = make;
        }
    };

    onAddFormSubmit = (e) => {
        this.vehicleMake.rootStore.vehicleModel.addViewStore.onAddFormSubmit(this.vehicleMake, e);
    };

    constructor(vehicleMake) {
        this.vehicleMake = vehicleMake;
    }
}

decorate(AddViewStore, {
    addCar: action,
    resetMake: action,
    setMake: action,
    onAddFormSubmit: action,
});

export default AddViewStore;
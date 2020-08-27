import { decorate, action } from "mobx";

class EditViewStore {
    // add and edit
    resetMake = () => this.vehicleMake.make = '';

    onEditFormSubmit = (carToChange, event) => {
        this.vehicleMake.rootStore.vehicleModel.onEditFormSubmit(this.vehicleMake, carToChange, event);
    };

    // edit
    setMake = (make) => {
        if (make !== '') {
            this.vehicleMake.make = make;
        }
    };

    constructor(vehicleMake) {
        this.vehicleMake = vehicleMake;
    }
}

decorate(EditViewStore, {
    setMake: action,
    resetMake: action,
    onEditFormSubmit: action,
});

export default EditViewStore;
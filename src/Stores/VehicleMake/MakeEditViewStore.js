import { decorate, action } from "mobx";

class EditViewStore {
    resetMake = () => this.vehicleMake.make = '';

    changeCarSpec = (carToChange, model) => {
        this.vehicleMake.rootStore.vehicleModel.editViewStore.changeCarSpec(carToChange, this.vehicleMake.make, model);
    };

    onEditFormSubmit = (carToChange, event) => {
        event.preventDefault();
        this.vehicleMake.rootStore.vehicleModel.editViewStore.onEditFormSubmit(this.vehicleMake.editViewStore, carToChange, event);
    };

    setMake = (make) => {
            this.vehicleMake.make = make;
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
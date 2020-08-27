import { decorate, action } from "mobx";

class EditViewStore {
    // add and edit
    resetMake = () => this.vehicleMake.make = '';

    changeCarSpec = (carToChange, model) => {
        // const carIndex = this.cars.indexOf(carToChange);
        // this.cars[carIndex].make = make || carToChange.make;
        // this.cars[carIndex].model = model || carToChange.model;
        this.vehicleMake.rootStore.vehicleModel.editViewStore.changeCarSpec(carToChange, this.vehicleMake.make, model);
    };

    onEditFormSubmit = (carToChange, event) => {
        event.preventDefault();
        // console.log(carToChange)
        // console.log(this.vehicleMake);
        this.vehicleMake.rootStore.vehicleModel.editViewStore.onEditFormSubmit(this.vehicleMake.editViewStore, carToChange, event);
    };

    // edit
    setMake = (make) => {
        // if (make !== '') {
            this.vehicleMake.make = make;
        // }
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
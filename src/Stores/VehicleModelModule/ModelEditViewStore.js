import { decorate, action, observable } from "mobx";
import makeInputBlank from '../../Common/makeInputBlank';

class EditViewStore {
    // edit
    changeCarSpec = (carToChange, make, model) => {
        // const carIndex = this.cars.indexOf(carToChange);
        // this.cars[carIndex].make = make || carToChange.make;
        // this.cars[carIndex].model = model || carToChange.model;
        carToChange.make = make || carToChange.make;
        carToChange.model = model || carToChange.model;
    };

    setModel = (model) => {
        // if (model !=='') {
            this.vehicleModel.model = model;
        // }
    }

    // cardClicked = false;

    // toggleCardClicked = (bool) => {
    //     console.log(this.cardClicked)
    //     this.cardClicked = bool;
    //     console.log(this.cardClicked)
    // };

    resetModel = () => this.vehicleModel.model = '';

    onEditFormSubmit = (vehicleMakeEditStore, carToChange, event) => {
        event.preventDefault();
        makeInputBlank(event.target.model);
        makeInputBlank(event.target.make);
        vehicleMakeEditStore.changeCarSpec(carToChange, this.vehicleModel.model);
        vehicleMakeEditStore.resetMake();
        this.resetModel();
        // this.toggleCardClicked(false);
    };

    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }
}

decorate(EditViewStore, {
    changeCarSpec: action,
    cardClicked: observable,
    toggleCardClicked: action,
    setModel: action,
    resetModel: action,
    onEditFormSubmit: action,
});

export default EditViewStore;
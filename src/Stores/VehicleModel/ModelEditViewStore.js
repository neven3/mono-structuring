import { decorate, action, observable } from "mobx";
import makeInputBlank from '../../Common/makeInputBlank';

class EditViewStore {
    // edit
    changeCarSpec = (carToChange, make, model) => {
        carToChange.make = make || carToChange.make;
        carToChange.model = model || carToChange.model;
    };

    setModel = (model) => {
        this.vehicleModel.model = model;
    };

    resetModel = () => this.vehicleModel.model = '';

    onEditFormSubmit = (vehicleMakeEditStore, carToChange, event) => {
        event.preventDefault();
        makeInputBlank(event.target.model);
        makeInputBlank(event.target.make);
        vehicleMakeEditStore.changeCarSpec(carToChange, this.vehicleModel.model);
        vehicleMakeEditStore.resetMake();
        this.resetModel();
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

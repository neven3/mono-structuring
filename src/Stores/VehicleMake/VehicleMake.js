import { decorate, observable } from "mobx";
import AddViewStore from "./MakeAddViewStore";
import EditViewStore from "./MakeEditViewStore";

class VehicleMake {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.addViewStore = new AddViewStore(this);
        this.editViewStore = new EditViewStore(this);
        // this.listViewStore = new ListViewStore(this);
        this.make = '';
    }
}

decorate(VehicleMake, {
    make: observable,
});

export default VehicleMake;

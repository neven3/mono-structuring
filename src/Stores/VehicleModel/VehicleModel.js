import { decorate, observable } from "mobx";
import ListViewStore from './ModelListViewStore';
import EditViewStore from './ModelEditViewStore';
import AddViewStore from './ModelAddViewStore';
import mockData from '../../Common/mockData';

class VehicleModel {
    cars = mockData.slice();

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.listViewStore = new ListViewStore(this);
        this.editViewStore = new EditViewStore(this);
        this.addViewStore = new AddViewStore(this);
        this.model = '';
    }
}

decorate(VehicleModel, {
    cars: observable,
    model: observable,
});

export default VehicleModel;

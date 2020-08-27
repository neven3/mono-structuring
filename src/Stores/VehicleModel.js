import { nanoid } from 'nanoid';
import { decorate, observable, action } from "mobx";
import ListViewStore from './VehicleModelModule/ModelListViewStore';
import EditViewStore from './VehicleModelModule/ModelEditViewStore';
import AddViewStore from './VehicleModelModule/ModelAddViewStore';
import mockData from '../../Common/mockData';

class VehicleModel {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.listViewStore = new ListViewStore(this);
        this.editViewStore = new EditViewStore(this);
        this.addViewStore = new AddViewStore(this);
        this.model = '';
    }

    cars = mockData.slice();

    // add
    addCar = (make, model) => {
        if (make && model)
        this.rootStore.cars.push({ make, model, id: nanoid() });
    };

    // add and edit
    resetModel = () => this.model = '';
    
    // add and edit
    setModel = (model) => {
        if (model !== '') {
            this.model = model;
        }
    }
}

decorate(VehicleModel, {
    model: observable,
    addCar: action,
    setModel: action,
    resetModel: action,
});

export default VehicleModel;
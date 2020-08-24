import VehicleModel from './VehicleModel';
import VehicleMake from './VehicleMake';
import { decorate, observable } from 'mobx';

class RootStore {
    cars = [
        {
            make: 'Aston Martin',
            model: 'Vanquish',
            id: Math.random(),
        },
    ];
    searchText = '';
    
    sortParams = {
        sortBy: 'make',
        direction: 'ascending',
    };

    currentPage = 1;
    cardsPerPage = 6;

    constructor() {
        this.vehicleMake = new VehicleMake(this);
        this.vehicleModel = new VehicleModel(this);
    }
}

decorate(RootStore, {
    cars: observable,
    searchText: observable,
    sortParams: observable,
    currentPage: observable,
    cardsPerPage: observable,
});

export default RootStore;
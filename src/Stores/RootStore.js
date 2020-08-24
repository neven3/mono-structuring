import VehicleModel from './VehicleModel';
import VehicleMake from './VehicleMake';
import { decorate, observable, computed, action } from 'mobx';
import mockData from '../Common/mockData';
import sortItems from '../Common/sortItems';
import getCurrentCards from '../Common/getCurrentCards';

class RootStore {
    cars = mockData.slice();

    sortParams = {
        sortBy: 'make',
        direction: 'ascending',
    };
    
    searchText = '';
    currentPage = 1;
    cardsPerPage = 6;
    
    setCurrentPage = (e) => {
        if (this.pageNumbersArray.length === 1) {
            this.currentPage = 1;
        } else {
            this.currentPage = e.target.id;
        }
    }
    
    constructor() {
        this.vehicleMake = new VehicleMake(this);
        this.vehicleModel = new VehicleModel(this);
    }

    get filteredCars() {
        const sortedCars = sortItems(this.cars.slice(), this.sortParams.direction, this.sortParams.sortBy);
    
        return sortedCars.filter(car => {
            return(
                car.make.toLowerCase().includes(this.searchText)
                || car.model.toLowerCase().includes(this.searchText)
            );
        });
    }

    get currentCars() {
        return getCurrentCards(this.filteredCars, this.currentPage, this.cardsPerPage);
    }

    get pageNumbersArray() {
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.cars.length / this.cardsPerPage); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    }
}

decorate(RootStore, {
    cars: observable,
    searchText: observable,
    sortParams: observable,
    currentPage: observable,
    cardsPerPage: observable,
    pageNumbersArray: computed,
    setCurrentPage: action,
    filteredCars: computed,
    currentCars: computed,
});

export default RootStore;
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
    
    // list
    setCurrentPage = (e) => {
        this.currentPage = e.target.id;
    }

    // edit
    changeCarSpec = (carToChange, make, model) => {
        const carIndex = this.cars.indexOf(carToChange);
        this.cars[carIndex].make = make || carToChange.make;
        this.cars[carIndex].model = model || carToChange.model;
    };

    // list
    changeSearchText = (event) => {
        this.searchText = event.target.value;
    };

    // list
    setSortParams = (sortBy, direction) => {
        this.sortParams = {sortBy, direction};
    };
    
    constructor() {
        this.vehicleMake = new VehicleMake(this);
        this.vehicleModel = new VehicleModel(this);
    }

    // list
    get filteredCars() {
        const sortedCars = sortItems(this.cars.slice(), this.sortParams.direction, this.sortParams.sortBy);
    
        return sortedCars.filter(car => {
            return(
                car.make.toLowerCase().includes(this.searchText)
                || car.model.toLowerCase().includes(this.searchText)
            );
        });
    }

    // list
    get currentCars() {
        return getCurrentCards(this.filteredCars, this.currentPage, this.cardsPerPage);
    }

    // list
    get pageNumbersArray() {
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.filteredCars.length / this.cardsPerPage); i++) {
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
    changeSearchText: action,
    setSortParams: action,
});

export default RootStore;
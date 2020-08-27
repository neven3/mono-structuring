// import mockData from '../../Common/mockData';
import sortItems from '../Common/sortItems';
import getCurrentCards from '../Common/getCurrentCards';
import { decorate, observable, computed, action } from 'mobx';

class ListViewStore {
    // cars = mockData.slice();

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
    };

    // list
    changeSearchText = (event) => {
        this.searchText = event.target.value;
    };

    // list
    setSortParams = (sortBy, direction) => {
        this.sortParams = { sortBy, direction };
    };

    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    // list
    get filteredCars() {
        const sortedCars = sortItems(this.vehicleModel.cars.slice(), this.sortParams.direction, this.sortParams.sortBy);

        return sortedCars.filter(car => {
            return (
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

decorate(ListViewStore, {
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

export default ListViewStore;
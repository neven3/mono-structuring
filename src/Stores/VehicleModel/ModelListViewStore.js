import sortItems from '../../Common/sortItems';
import getCurrentCards from '../../Common/getCurrentCards';
import { decorate, observable, computed, action } from 'mobx';

class ListViewStore {
    sortParams = {
        sortBy: 'make',
        direction: 'ascending',
    };

    searchText = '';
    currentPage = 1;
    cardsPerPage = 6;

    setCurrentPage = (e) => {
        const btns = document.querySelectorAll('.page-button');
        this.currentPage = e?.target?.id || 1;
        btns.forEach(btn => btn.classList.remove('active'));
        btns[this.currentPage - 1].classList.add('active');
    };

    changeSearchText = (event) => {
        this.searchText = event.target.value;
        this.setCurrentPage();
    };

    setSortParams = (sortBy, direction) => {
        this.sortParams = { sortBy, direction };
        this.setCurrentPage();
    };

    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
        this.selectedMake = this.vehicleModel.rootStore.vehicleMake.listViewStore.selectedMake;
    }

    get filteredCars() {
        const carsArray = this.vehicleModel.rootStore.vehicleMake.listViewStore.allCarsOfMake || this.vehicleModel.cars.slice();
        // console.log(this.vehicleModel.rootStore.vehicleMake.listViewStore.currentCars)
        const sortedCars = sortItems(/* this.vehicleModel.cars.slice() */carsArray , this.sortParams.direction, this.sortParams.sortBy);

        return sortedCars.filter(car => {
            return (
                car.make.toLowerCase().includes(this.searchText)
                || car.model.toLowerCase().includes(this.searchText)
            );
        });
    }

    get currentCars() {
        console.log(this.filteredCars)
        return getCurrentCards(this.filteredCars, this.currentPage, this.cardsPerPage);
    }

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
    selectedMake: observable,
});

export default ListViewStore;

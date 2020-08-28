import { decorate, action, computed, observable } from "mobx";
import getCurrentCards from "../../Common/getCurrentCards";

class ListViewStore {
    selectMake = (make) => {
        console.log(make)
        this.setMake(make);
        this.selectedMake = make;
    };

    setMake = (make) => {
        this.vehicleMake.make = make;
    };
    
    constructor(vehicleMake) {
        this.vehicleMake = vehicleMake;
        this.selectedMake = '';
    }

    get allMakes() {
        const makesSet = new Set();
        this.vehicleMake.rootStore.vehicleModel.cars.forEach(car => makesSet.add(car.make));
        return [...makesSet].sort((a, b) => a > b ? 1 : -1);
    }

    get allModelsOfMake() {
        console.log(this.vehicleMake.rootStore.vehicleModel.listViewStore.filteredCars.filter(car => car.make.includes(this.vehicleMake.make)))
        return this.vehicleMake.rootStore.vehicleModel.listViewStore.filteredCars.filter(car => car.make.includes(this.vehicleMake.make));
    }

    get currentCars() {
        const { currentPage, cardsPerPage } = this.vehicleMake.rootStore.vehicleModel.listViewStore;

        console.log(this.currentCars)
        return getCurrentCards(this.allModelsOfMake, currentPage, cardsPerPage);
    }
}

decorate(ListViewStore, {
    selectMake: action,
    setMake: action,
    selectedMake: observable,
    allMakes: computed,
    allModelsOfMake: computed,
    currentCars: computed,
});

export default ListViewStore;

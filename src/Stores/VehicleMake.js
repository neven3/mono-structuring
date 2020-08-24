class VehicleMake {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.make = '';
    }

    // add
    addCar = (model) => {
        this.rootStore.vehicleModel.addCar(this.make, model);
    };

    // edit
    setMake = (make) => {
        this.make = make;
    };

    // list
    // what should I list here?

}

export default VehicleMake;
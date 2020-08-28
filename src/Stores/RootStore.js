import VehicleModel from './VehicleModel/VehicleModel';
import VehicleMake from './VehicleMake/VehicleMake';

class RootStore {
    constructor() {
        this.vehicleMake = new VehicleMake(this);
        this.vehicleModel = new VehicleModel(this);
    }
}

export default RootStore;

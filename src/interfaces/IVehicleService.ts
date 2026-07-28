import Vehicle from "../models/Vehicle.js";
import type {
    newVehicleDetails,
    updatedVehicleDetails
} from "./IvehicleRepository.js";

export default interface isVehicleService {

    addVehicle(data: newVehicleDetails): Promise<Vehicle>;

    removeVehicle(id: number): Promise<Vehicle | null>;

    updateVehicle(id: number, data: updatedVehicleDetails): Promise<Vehicle | null>;

    getVehicle(id: number): Promise<Vehicle | null>;

    getAllVehicles(): Promise<Vehicle[]>;
}
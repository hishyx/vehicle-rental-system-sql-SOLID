import type isVehicleService from "../interfaces/IVehicleService.js";
import type {
    isVehicleRepository,
    newVehicleDetails,
    updatedVehicleDetails
} from "../interfaces/IvehicleRepository.js";

import Vehicle from "../models/Vehicle.js";

export default class VehicleService implements isVehicleService {


    constructor(private vehicleRepository: isVehicleRepository) { }


    async addVehicle(data: newVehicleDetails): Promise<Vehicle> {

        data.year = Number(data.year)
        data.dailyRate = Number(data.dailyRate)

        return this.vehicleRepository.addVehicle(data);
    }

    async removeVehicle(id: number): Promise<Vehicle | null> {
        return this.vehicleRepository.removeVehicle(id);
    }

    async updateVehicle(id: number, data: updatedVehicleDetails): Promise<Vehicle | null> {

        data.year = Number(data.year)
        data.dailyRate = Number(data.dailyRate)

        return this.vehicleRepository.updateVehicle(id, data);
    }

    async getVehicle(id: number): Promise<Vehicle | null> {
        return this.vehicleRepository.getVehicle(id);
    }

    async getAllVehicles(): Promise<Vehicle[]> {
        return this.vehicleRepository.getAllVehicles();
    }
}
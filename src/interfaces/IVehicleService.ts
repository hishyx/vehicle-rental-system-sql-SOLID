import Vehicle from "../models/Vehicle.js";


import type { newVehicleDetails } from "../dto/newVehicleDetails.js";

import type { updatedVehicleDetails } from "../dto/updatedVehicleDetails.js";

export default interface isVehicleService {

    addVehicle(data: newVehicleDetails): Promise<Vehicle>;

    removeVehicle(id: number): Promise<Vehicle | null>;

    updateVehicle(id: number, data: updatedVehicleDetails): Promise<Vehicle | null>;

    getVehicle(id: number): Promise<Vehicle | null>;

    getAllVehicles(): Promise<Vehicle[]>;
}
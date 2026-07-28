import Vehicle from "../models/Vehicle.js";

export interface updatedVehicleDetails {
    model?: string,
    year?: number,
    licensePlate?: string,
    dailyRate?: number
}

export interface newVehicleDetails {
    brand: string;
    model: string;
    year: number;
    licensePlate: string;
    dailyRate: number;
}

export interface isVehicleRepository {

    addVehicle(data: newVehicleDetails): Promise<Vehicle>;

    removeVehicle(id: number): Promise<Vehicle | null>;

    updateVehicle(id: number, data: updatedVehicleDetails): Promise<Vehicle | null>;

    getVehicle(id: number): Promise<Vehicle | null>;

    getAllVehicles(): Promise<Vehicle[]>

}
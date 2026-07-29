import type { isVehicleRepository, } from "../interfaces/IvehicleRepository.js";

import type { newVehicleDetails } from "../dto/newVehicleDetails.js";

import type { updatedVehicleDetails } from "../dto/updatedVehicleDetails.js";

import Vehicle from "../models/Vehicle.js";
import prisma from "../config/db.js";
import type { Vehicle as PrismaVehicle } from "@prisma/client";

export default class VehicleRepository implements isVehicleRepository {

    private toDomain(vehicle: PrismaVehicle): Vehicle {
        return new Vehicle(vehicle);
    }


    async addVehicle(data: newVehicleDetails): Promise<Vehicle> {

        const vehicle = await prisma.vehicle.create({ data })

        return this.toDomain(vehicle)

    }

    async removeVehicle(id: number): Promise<Vehicle | null> {

        const vehicle = await prisma.vehicle.delete({ where: { id } })

        return this.toDomain(vehicle)

    }

    async updateVehicle(id: number, data: updatedVehicleDetails): Promise<Vehicle> {

        const vehicle = await prisma.vehicle.update({ where: { id }, data })

        return this.toDomain(vehicle)
    }

    async getVehicle(id: number): Promise<Vehicle> {

        const vehicle = await prisma.vehicle.findUnique({ where: { id } })

        if (!vehicle) throw Error("No vehicle found");

        return this.toDomain(vehicle)


    }

    async getAllVehicles(): Promise<Vehicle[]> {

        const vehicles = await prisma.vehicle.findMany();

        return vehicles.map(vehicle => this.toDomain(vehicle));
    }

}
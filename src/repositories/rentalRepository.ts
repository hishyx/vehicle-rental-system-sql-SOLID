import type { isRentalRepository, isRentalDetails } from "../interfaces/IrentalRepository.js";
import prisma from "../config/db.js";
import Rental from "../models/Rental.js";
import type { Rental as PrismaRental } from "@prisma/client";

export default class RentalRepository implements isRentalRepository {

    async showRentals(): Promise<Rental[]> {

        const result = await prisma.rental.findMany({})

        return result.map((r: PrismaRental) => new Rental(r))


    }

    async takeRent(data: isRentalDetails): Promise<void> {


        await prisma.rental.create({ data })
    }

    async returnCar(id: number): Promise<Rental> {

        const rental = await prisma.rental.update({ where: { id }, data: { status: "COMPLETED", endDate: new Date() } })

        return new Rental(rental);
    }
}
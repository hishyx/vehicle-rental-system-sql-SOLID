import Rental from "../models/Rental.js";

export type isRentalDetails = {
    vehicleId: number,
    customerId: number,
    startDate: Date,
    endDate: Date | null
}

export interface isRentalRepository {


    showRentals(): Promise<Rental[]>;

    takeRent(data: isRentalDetails): Promise<void>;

    returnCar(id: number): Promise<Rental>
}
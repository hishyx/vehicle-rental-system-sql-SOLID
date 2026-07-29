import Rental from "../models/Rental.js";

import type { isRentalDetails } from "../dto/rentalDetails.js";

export interface isRentalRepository {


    showRentals(): Promise<Rental[]>;

    takeRent(data: isRentalDetails): Promise<void>;

    returnCar(id: number): Promise<Rental>
}
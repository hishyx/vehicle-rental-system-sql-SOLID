import Rental from "../models/Rental.js";

export default interface isRentalService {


    showRentals(): Promise<Rental[]>;

    takeRent(vehicleId: number, customerData: { name: string; email: string; phone: string }): Promise<void>;

    returnCar(id: number): Promise<void>
}
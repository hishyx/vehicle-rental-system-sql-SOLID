import type isRentalService from "../interfaces/IrentalService.js";
import Rental from "../models/Rental.js";
import type { isRentalRepository } from "../interfaces/IrentalRepository.js";
import type isCustomerRepository from "../interfaces/IcustomerRepository.js";
import type { isVehicleRepository } from "../interfaces/IvehicleRepository.js";




export default class RentalService implements isRentalService {


    constructor(private rentalRepository: isRentalRepository,
        private customerRepository: isCustomerRepository,
        private vehicleRepository: isVehicleRepository
    ) { };


    async showRentals(): Promise<Rental[]> {


        const rentals = await this.rentalRepository.showRentals()

        for (let r of rentals) {
            r.customerName = (await this.customerRepository.getCustomer(r.customerId)).name

            const vehicle = await this.vehicleRepository.getVehicle(r.vehicleId)
            r.vehicleName = vehicle.brand + " - " + vehicle.model
        }



        return rentals

    }

    async takeRent(vehicleId: number, customerData: { name: string; email: string; phone: string }): Promise<void> {


        const customer = await this.customerRepository.addCustomer(customerData)

        await this.vehicleRepository.updateVehicle(vehicleId, { isAvailable: false })

        const data = {
            vehicleId,
            customerId: customer.id,
            startDate: new Date(),
            endDate: null
        }

        await this.rentalRepository.takeRent(data)

    }

    async returnCar(id: number): Promise<void> {

        const { vehicleId } = await this.rentalRepository.returnCar(id);

        await this.vehicleRepository.updateVehicle(vehicleId, { isAvailable: true })
    }

}
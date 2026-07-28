import CustomerRepository from "./repositories/customerRepository.js";
import RentalRepository from "./repositories/rentalRepository.js";
import VehicleRepository from "./repositories/vehicleRepository.js";
import CustomerService from "./services/customerServices.js";
import RentalService from "./services/rentalServices.js";
import VehicleService from "./services/vehicleServices.js";

const vehicleRepository = new VehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);

const rentalRepository = new RentalRepository
const customerRepository = new CustomerRepository
const rentalService = new RentalService(rentalRepository, customerRepository, vehicleRepository)


const customerService = new CustomerService(customerRepository)

export { vehicleService, rentalService, customerService };
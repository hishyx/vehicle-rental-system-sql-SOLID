import VehicleRepository from "./repositories/vehicleRepository.js";
import VehicleService from "./services/vehicleServices.js";

const vehicleRepository = new VehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);

export { vehicleService };
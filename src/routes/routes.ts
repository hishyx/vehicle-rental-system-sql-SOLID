import { Router } from "express";
import * as vehicleControllers from "../controllers/vehicleController.js"
import * as rentalControllers from "../controllers/rentalController.js"


const router = Router();

router.get("/vehicles/add", vehicleControllers.addVehiclePage)


router
    .route("/vehicles")
    .get(vehicleControllers.listVehicles)
    .post(vehicleControllers.addVehicle)

router
    .route("/vehicles/:id")
    .get(vehicleControllers.getVehicle)
    .patch(vehicleControllers.updateVehicle)
    .delete(vehicleControllers.removeVehicle)

router
    .route("/rentals")
    .get(rentalControllers.listRentals)
    .post(rentalControllers.takeRental)

router.get("/rentals/:id/return", rentalControllers.returnRental)

router.get("/customer", rentalControllers.listCustomers)


export default router;
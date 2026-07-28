import { Router } from "express";
import * as vehicleControllers from "../controllers/vehicleController.js"
import * as rentalControllers from "../controllers/rentalController.js"
import * as globalControllers from "../controllers/globalController.js"
import * as customerControllers from "../controllers/customerController.js"


const router = Router();

router.get("/", globalControllers.showDashboard)

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


router
    .route("/rentals/add/:vehicleId")
    .get(rentalControllers.rentalDetailsPage)
    .post(rentalControllers.takeRental)

router.patch("/rentals/:id/return", rentalControllers.returnRental)

router.get("/customers", customerControllers.listCustomers)



export default router;

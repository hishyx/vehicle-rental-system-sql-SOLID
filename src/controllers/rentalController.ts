import type { Request, Response } from "express";
import { rentalService } from "../dependencies.js";

export async function takeRental(req: Request, res: Response) {



    await rentalService.takeRent(Number(req.params.vehicleId), req.body)

    res.redirect("/rentals")

}

export async function returnRental(req: Request, res: Response) {


    await rentalService.returnCar(Number(req.params.id))

    res.redirect("/rentals")

}

export async function listRentals(req: Request, res: Response) {

    const rentals = await rentalService.showRentals()

    res.render("rentals/index", { rentals })

}

export function rentalDetailsPage(req: Request, res: Response) {

    res.render("rentals/add", { vehicleId: req.params.vehicleId })

}


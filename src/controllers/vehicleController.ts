import type { Request, Response } from "express";
import { vehicleService } from "../dependencies.js";



export async function listVehicles(req: Request, res: Response) {

    const result = await vehicleService.getAllVehicles()



    res.render("vehicles/index.ejs", { vehicles: result })
}



export async function getVehicle(req: Request, res: Response) {

    const vehicle = await vehicleService.getVehicle(Number(req.params.id))

    if (!vehicle) {
        res.sendStatus(404)
        return
    }

    res.render("vehicles/edit.ejs", { vehicle })
}

export async function addVehicle(req: Request, res: Response) {

    await vehicleService.addVehicle(req.body)

    res.redirect("/vehicles")
}

export async function addVehiclePage(req: Request, res: Response) {

    res.render("vehicles/add.ejs")
}

export async function updateVehicle(req: Request, res: Response) {

    await vehicleService.updateVehicle(Number(req.params.id), req.body)

    res.redirect("/vehicles")
}

export async function removeVehicle(req: Request, res: Response) {

    await vehicleService.removeVehicle(Number(req.params.id))

    res.redirect("/vehicles")
}

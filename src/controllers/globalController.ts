import type { Request, Response } from "express";

export async function showDashboard(req: Request, res: Response) {

    res.render("dashboard", {
        totalVehicles: 0,
        availableVehicles: 0,
        rentedVehicles: 0,
        totalCustomers: 0,
        activeRentals: 0
    });

}
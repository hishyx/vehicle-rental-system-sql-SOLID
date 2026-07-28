import type { Request, Response } from "express";

export async function takeRental(req: Request, res: Response) {

    res.redirect("/rentals")

}

export async function returnRental(req: Request, res: Response) {

    res.redirect("/rentals")

}

export async function listRentals(req: Request, res: Response) {

    res.render("rentals/index", { rentals: [] })

}

export async function listCustomers(req: Request, res: Response) {

    res.render("customers/index", { customers: [] })

}



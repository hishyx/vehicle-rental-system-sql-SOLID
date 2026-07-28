import { customerService } from "../dependencies.js";
import type { Request, Response } from "express";

export async function listCustomers(req: Request, res: Response) {


    const customers = await customerService.listCustomers()

    console.log(customers)


    res.render("customers/index", { customers })

}


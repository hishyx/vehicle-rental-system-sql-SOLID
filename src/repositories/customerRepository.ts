import type isCustomerRepository from "../interfaces/IcustomerRepository.js";
import prisma from "../config/db.js";
import Customer from "../models/Customer.js";
import type { User } from "@prisma/client";

export default class CustomerRepository implements isCustomerRepository {


    async addCustomer(data: { name: string; email: string; phone: string }): Promise<Customer> {

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: data.email },
                    { phone: data.phone },
                ],
            },
        });

        if (existingUser) {
            return new Customer(existingUser)
        }

        const user = await prisma.user.create({
            data,
        });

        return new Customer(user)
    }

    async showCustomers(): Promise<Customer[]> {

        const customers = await prisma.user.findMany({ where: { role: "CUSTOMER" } })

        return customers.map((c: User) => new Customer(c))
    }

    async getCustomer(id: number): Promise<Customer> {

        const customer = await prisma.user.findUnique({ where: { id } })

        if (!customer) {
            throw Error("Customer not found");
        }

        return new Customer(customer)
    }




}
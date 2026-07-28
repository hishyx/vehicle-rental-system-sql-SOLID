
import Customer from "../models/Customer.js";

export default interface isCustomerRepository {


    addCustomer(data: { name: string; email: string; phone: string }): Promise<Customer>;
    showCustomers(): Promise<Customer[]>;
    getCustomer(id: number): Promise<Customer>;
}
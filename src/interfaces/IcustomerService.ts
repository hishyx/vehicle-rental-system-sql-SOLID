import Customer from "../models/Customer.js";

export default interface isCustomerService {

    listCustomers(): Promise<Customer[]>;
}
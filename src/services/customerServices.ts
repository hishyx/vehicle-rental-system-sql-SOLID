import type isCustomerRepository from "../interfaces/IcustomerRepository.js";
import type isCustomerService from "../interfaces/IcustomerService.js";
import type Customer from "../models/Customer.js";

export default class CustomerService implements isCustomerService {

    constructor(private customerRepository: isCustomerRepository) { }

    async listCustomers(): Promise<Customer[]> {

        return await this.customerRepository.showCustomers()

    }
}
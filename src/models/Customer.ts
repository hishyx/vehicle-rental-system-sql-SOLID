import User from "./User.js";

interface CustomerProps {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export default class Customer extends User {
    constructor({ id, name, email, phone }: CustomerProps) {
        super(id, name, email, phone, "CUSTOMER");
    }

    rentVehicle() {
        // ...
    }

    returnVehicle() {
        // ...
    }
}
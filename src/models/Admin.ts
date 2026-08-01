import User from "./User.js";

interface AdminProps {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export default class Admin extends User {
    constructor({ id, name, email, phone }: AdminProps) {
        super(id, name, email, phone, "ADMIN");
    }

    addVehicle() {
    }

    removeVehicle() {
    }
}
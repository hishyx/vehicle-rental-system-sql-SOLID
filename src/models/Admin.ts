import User from "./User.js";

export default class Admin extends User {

    constructor(
        id: number,
        name: string,
        email: string,
        phone: string
    ) {
        super(id, name, email, phone, "ADMIN");
    }

    addVehicle() {
        // ...
    }

    removeVehicle() {
        // ...
    }
}
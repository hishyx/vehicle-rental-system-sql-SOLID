import User from "./User.js";

export default class Customer extends User {

    constructor(
        id: number,
        name: string,
        email: string,
        phone: string
    ) {
        super(id, name, email, phone, "CUSTOMER");
    }

    rentVehicle() {
        // ...
    }

    returnVehicle() {
        // ...
    }
}
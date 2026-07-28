export default class Vehicle {

    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public year: number,
        public licensePlate: string,
        public dailyRate: number,
        public isAvailable: boolean
    ) { }

}
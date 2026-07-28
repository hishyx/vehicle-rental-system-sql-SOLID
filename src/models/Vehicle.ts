interface VehicleProps {
    id: number;
    brand: string;
    model: string;
    year: number;
    licensePlate: string;
    dailyRate: number;
    isAvailable: boolean;
}

export default class Vehicle {
    public id: number;
    public brand: string;
    public model: string;
    public year: number;
    public licensePlate: string;
    public dailyRate: number;
    public isAvailable: boolean;

    constructor({
        id,
        brand,
        model,
        year,
        licensePlate,
        dailyRate,
        isAvailable,
    }: VehicleProps) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.dailyRate = dailyRate;
        this.isAvailable = isAvailable;
    }
}
type RentalProps = {
    id: number;
    vehicleId: number;
    customerId: number;
    startDate: Date;
    endDate: Date | null;
    status: string;
};

export default class Rental {
    public id: number;
    public vehicleId: number;
    public customerId: number;
    public customerName?: string;
    public vehicleName?: string;
    public startDate: Date;
    public endDate: Date | null;
    public status: string;

    constructor({
        id,
        vehicleId,
        customerId,
        startDate,
        endDate,
        status,
    }: RentalProps) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.customerId = customerId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }
}
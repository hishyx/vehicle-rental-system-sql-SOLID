class Rental {

    constructor(
        public id: number,
        public vehicleId: number,
        public customerId: number,
        public startDate: Date,
        public endDate: Date,
        public status: string
    ) { }

}
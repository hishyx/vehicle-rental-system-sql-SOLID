export default class User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phone: string,
        public role: string
    ) { }


    getName(): string {
        return this.name
    }
}
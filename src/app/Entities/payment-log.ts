export class PaymentLog {
    constructor(
        public number:IdleDeadline,
        public date: Date,
        public paidAmount: string,
        public object: string, 
        public paymentMethod: string
    ){

    }
}

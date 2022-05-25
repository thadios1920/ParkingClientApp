import { Car } from "./car";
import { PaymentLog } from "./payment-log";
import { Transaction } from "./transaction";

export class Driver {
    constructor(
        public name?: string, 
        public lastname?: string,
        public username?: string, 
        public email?: string,
        public phoneNumber?: string,
        public password?: string,
        public cars?: Car[],
        public transactions?: Transaction[],
        public payments?: PaymentLog[]
    ){

    }
}

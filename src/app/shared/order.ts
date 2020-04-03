import { Item } from './item';

export class Order {
    public id : string;
    public items : Item[];
    public sellerId : string;
    public customerId : string;
    public totalPrice : number;
    public totalTax : number;

    constructor(options : Partial<Order>) {
        Object.assign(this, options);
      }
}

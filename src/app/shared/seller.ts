import { Item } from './item';
import { Address } from './address';

export class Seller {
    public id : string;
    public items : Item[];
    public Address : Address;

    constructor(options : Partial<Seller>) {
        Object.assign(this, options);
      }
}

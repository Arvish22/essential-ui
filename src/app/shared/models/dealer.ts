import { Address } from './address';

export class Dealer {

    public id : string;
    public businessName : string;
    public ownerName : string;
    public contactNo : number;
    public address : Address[];

    constructor(options : Partial<Dealer>) {
        Object.assign(this, options);
      }
}

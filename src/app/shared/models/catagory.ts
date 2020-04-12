import { Dealer } from './dealer';

export class Catagory {
  
    public id : string;
    public type : string;
    public dealers : Dealer[];

    constructor(options : Partial<Catagory>) {
        Object.assign(this, options);
      }
}

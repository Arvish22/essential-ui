import { Address } from 'cluster';

export class User {
    public id : string;
    public name : string;
    public Address : Address[];
    public email : string;
    public mobileNo : string;

    constructor(options : Partial<User>) {
        Object.assign(this, options);
      }
}


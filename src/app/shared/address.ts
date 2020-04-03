export class Address {
    public id : string;
    public country : string;
    public state : string;
    public city : string;
    public Area : string;
    public houseNo : string;
    public phoneNo : number;

    constructor(options : Partial<Address>) {
        Object.assign(this, options);
      }
}

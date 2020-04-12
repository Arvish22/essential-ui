export class Address {
    
    public id : string;
    public country : string;
    public state : string;
    public street : string;
    public city : string;
    public area : string;
    public houseNo : string;

    constructor(options : Partial<Address>) {
        Object.assign(this, options);
      }
}

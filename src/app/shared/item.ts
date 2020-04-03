export class Item {
    public id : string;
    public name : string;
    public description : string;
    public brand : string;
    public price : number;

    constructor(options : Partial<Item>) {
        Object.assign(this, options);
      }
}

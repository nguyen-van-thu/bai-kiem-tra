 export class Product {
     private _id: number = 0;
     private _name: string;
     private _generic: string;
     private _price: number;
     private _amount: string;
     private _date: string;
     private _description: string;


     constructor(id:number, name: string, generic: string, price: number, amount: string, date: string, description: string) {
         this._id = id ;
         this._name = name;
         this._generic = generic;
         this._price = price;
         this._amount = amount;
         this._date = date;
         this._description = description;
     }

     get id(): number {
         return this._id;
     }

     set id(value: number) {
         this._id = value;
     }

     get name(): string {
         return this._name;
     }

     set name(value: string) {
         this._name = value;
     }

     get generic(): string {
         return this._generic;
     }

     set generic(value: string) {
         this._generic = value;
     }

     get price(): number {
         return this._price;
     }

     set price(value: number) {
         this._price = value;
     }

     get amount(): string {
         return this._amount;
     }

     set amount(value: string) {
         this._amount = value;
     }

     get date(): string {
         return this._date;
     }

     set date(value: string) {
         this._date = value;
     }

     get description(): string {
         return this._description;
     }

     set description(value: string) {
         this._description = value;
     }
 }
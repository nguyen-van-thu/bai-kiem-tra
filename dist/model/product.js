"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, generic, price, amount, date, description) {
        this._id = 0;
        this._id = id;
        this._name = name;
        this._generic = generic;
        this._price = price;
        this._amount = amount;
        this._date = date;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get generic() {
        return this._generic;
    }
    set generic(value) {
        this._generic = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Product = Product;

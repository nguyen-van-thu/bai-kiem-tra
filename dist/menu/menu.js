"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const rl = __importStar(require("readline-sync"));
const ProductManagement_1 = require("./ProductManagement");
// @ts-ignore
const Product_1 = require("./Product");
class Menu {
    constructor() {
        this.products = new ProductManagement_1.ProductManagement();
    }
    menu() {
        console.log('---nhap chon---');
        console.log('1. hien thi hang hoa ');
        console.log('2. tim kiem');
        console.log('3. them hang moi');
        console.log('4. sua hang');
        console.log('5.xoa hang');
        console.log('0. thoat !!');
    }
    showAllProduct() {
        let listProduct = this.products.getAll();
        if (listProduct.length == 0) {
            console.log(' ko san pham ');
        }
        else {
            console.log(listProduct);
        }
    }
    findProduct() {
        let name = rl.question(' nhap sam pham tim  ');
        let index = this.products.findByName(name);
        if (index = -1) {
            console.log(' san pham khong ton tai ');
        }
        else {
            console.log(this.products.getAll()[index]);
        }
    }
    addName() {
        let name = '';
        let isValidName = true;
        do {
            name = rl.question('Nhập tên sản phẩm mới ');
            let current = this.products.findByName(name);
            if (current != -1) {
                isValidName = false;
                console.log('Tên   san pham da tron tai');
            }
            else {
                isValidName = true;
            }
        } while (!isValidName);
        return name;
    }
    addProduct() {
        let name = this.addName();
        let type = rl.question('nhap loai hang ');
        let price = +rl.question(' nhap gia');
        let amount = +rl.question(' nhap so luong ');
        let date = new Date();
        return new Product_1.Product(name, type, price, amount, date);
    }
    run() {
        let choice = '-1';
        do {
            this.menu();
            choice = rl.question('  lua chon cua ban la : ');
            switch (choice) {
                case '1':
                    this.showAllProduct();
                    break;
                case '2':
                    this.findProduct();
                    break;
                case '3':
                    {
                        let product = this.addProduct();
                        this.products.addNewProduct(product);
                        console.log(' them san pham thanh cong');
                    }
                    break;
                case '4':
                    {
                        let name = rl.question(' nhap ten ban muon sua  ');
                        let product = this.addProduct();
                        this.products.updateProduct(name, product);
                    }
                    break;
                case '5':
                    {
                        let name = rl.question('Nhập tên sản phẩm bạn muốn xóa ');
                        this.products.delProduct(name);
                    }
                    break;
            }
        } while (choice != '0');
    }
}
exports.Menu = Menu;

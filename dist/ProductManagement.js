"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    findByName(name) {
        let arrProduct = ProductManagement.listProduct;
        let index = -1;
        for (let i = 0; i < arrProduct.length; i++) {
            if (name == arrProduct[i].name) {
                return i;
            }
        }
        return -1;
    }
    getAll() {
        return ProductManagement.listProduct;
    }
    addNewProduct(t) {
        ProductManagement.id++;
        t.id = ProductManagement.id;
        let arrProduct = ProductManagement.listProduct;
        arrProduct.push(t);
    }
    updateProduct(name, product) {
        let arrProduct = ProductManagement.listProduct;
        let index = this.findByName(name);
        if (index != -1) {
            arrProduct[index] = product;
        }
        else {
            console.log('Sản phẩm không tồn tại');
        }
    }
    delProduct(name) {
        let arrProduct = ProductManagement.listProduct;
        let index = this.findByName(name);
        if (index != -1) {
            arrProduct.splice(index, 1);
        }
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.listProduct = [];
ProductManagement.id = 0;

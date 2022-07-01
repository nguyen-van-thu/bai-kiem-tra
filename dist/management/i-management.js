"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    createNew(t) {
        ProductManagement.id++;
        t.id = ProductManagement.id;
        ProductManagement.product.push(t);
    }
    findById(id) {
        return 0;
    }
    getAll() {
        return ProductManagement.product;
    }
    removeById(id) {
    }
    updateById(id, t) {
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.id = 0;
ProductManagement.product = [];

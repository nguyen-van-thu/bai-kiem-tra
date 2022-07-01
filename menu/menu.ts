import * as rl from 'readline-sync';
import { ProductManagement } from "./ProductManagement";
// @ts-ignore
import { Product } from "./Product";
export class Menu {
    private products = new ProductManagement();

    menu() {
        console.log('---nhap chon---');
        console.log('1. hien thi hang hoa ');
        console.log('2. tim kiem');
        console.log('3. them hang moi');
        console.log('4. sua hang');
        console.log('5.xoa hang');
        console.log('0. thoat !!');
    }

    showAllProduct(): void {
        let listProduct = this.products.getAll();
        if(listProduct.length==0){
            console.log(' ko san pham ');

        }else{
            console.log(listProduct);
        }
    }

    findProduct(): void {
        let name = rl.question(' nhap sam pham tim  ');
        let index = this.products.findByName(name);
        if (index = -1) {
            console.log(' san pham khong ton tai ');
        } else {
            console.log(this.products.getAll()[index]);
        }
    }

    addName(){
        let name = '';
        let isValidName=true;

        do{
            name = rl.question('Nhập tên sản phẩm mới ');
            let current=this.products.findByName(name);
            if(current!=-1){
                isValidName=false;
                console.log('Tên   san pham da tron tai');
            }else{
                isValidName=true;
            }

        }while(!isValidName);
        return name;
    }


    addProduct(): Product {
        let name =this.addName();
        let type = rl.question('nhap loai hang ');
        let price = +rl.question(' nhap gia');
        let amount = +rl.question(' nhap so luong ');
        let date = new Date();

        return new Product(name, type, price, amount, date);
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

                case '3': {
                    let product = this.addProduct();
                    this.products.addNewProduct(product);
                    console.log(' them san pham thanh cong');

                }
                    break;

                case '4': {
                    let name = rl.question(' nhap ten ban muon sua  ');
                    let product = this.addProduct();
                    this.products.updateProduct(name, product)
                }
                    break;

                case '5': {
                    let name = rl.question('Nhập tên sản phẩm bạn muốn xóa ');
                    this.products.delProduct(name);
                }
                    break;

            }

        }
        while (choice != '0');
    }

}
'use strict'

class ProductItem{
    constructor(title,price,id,img){
        this.title = title;
        this.price = price;
        this.id = id;
        this.img = img;
    }

    /**
     * функция создает и возвращает новую html разметку,используя свойства товар
     */
    renderProduct() {
        return `<div class = 'product-item' data-id = '${this.id}'>
                 <img class="img" src="${this.img}">
                 <h3 class='name'> ${this.title}</h3>
                 <p>Цена ${this.price}</p>
                 <button class="buy-btn">Купить</button>
            </div>`
    }
}


class ProductList {
    constructor () {
        this.goods = [];
        this.fetchProducts();
        this.render();
       
    }

    /**
     * функция заполняет массив goods объектами и их свойствами
     */
    fetchProducts() {
        this.goods = [
            { id: 1, img: 'img/item3.png', title: 'Jacket', price: 2000},
            { id: 2, img: 'img/3.jpg', title: 'Sweater', price: 200},
            { id: 3, img: "img/4.jpg", title: 'T-Shirt', price: 20},
            { id: 4, img: "img/5.jpg", title: 'Blazer', price: 50},
        ]
    }

    /**
     * функция перебирает массив goods и используя свойства объекта в классе\n
     * ProductItem, перераспределяет эти свойства в разметку и вставляет \n
     * новую разметку в блок с классом products в html файл
     */
    render() {
        let block = "";
        this.goods.forEach(item => {
            const productItem = new ProductItem(item.title, item.price, item.id, item.img);
            block = block + productItem.renderProduct();
        })
            document.querySelector('.products').innerHTML = block;
    }
    
    /**
     * функция перебирает товары массива goods и прибавляет цену всех товаров 
     * @returns sum - общую сумму всех товаров
     * 
     */
    getSumOfAllProducts() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        })
        return sum;
    }
}


const list = new ProductList();
list.render();
alert(list.getSumOfAllProducts());

class Basket {
    addProduct() {                   //добавить товар

    }
    removeProduct() {                //удалить товар

    }
    changeProduct() {               // изменить товар

    }
    renderNewProductInBasket() {   // вывести товар в корзину
    
    }
}

class ItemInBasket {
    render() {                     // получаем разметку(верстку) одного товара

    }
}

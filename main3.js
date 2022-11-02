const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
      
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

   

    _getProducts(){

        return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        });
    }

    getSum() {
        return  this.allProducts.reduce((accum, item) => accum + item.price, 0);
       
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
           
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItem{
    constructor(product, img = 'img/3.jpg'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img =img;
    }

    render(){
        return `<div class="product-item" data-id = '${this.id}'>
                <img src='${this.img}' alt="Some img" class="img">
                <h3 class="name">${this.title}</h3>
                <p>${this.price} $</p>
                <button class="buy-btn">Купить</button>
                </div>`
    }

}
const list = new ProductList();




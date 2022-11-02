class Basket {
    constructor(container = '.cart-block'){
        this.container = container;
        this.cartGoods = [];
        this._clickCart();
        this._getCartProducts()
            .then(data => {
                this.cartGoods = data.contents;
                this.renderNewProduct();
            });
    }

    renderNewProduct() {
        const cartBlock = document.querySelector(this.container);
        for (let product of this.cartGoods) {
            const productCartObj = new ItemInBasket(product);
            cartBlock.insertAdjacentHTML('beforeend', productCartObj
            .renderBasket(product));
        }

    }
    _getCartProducts(){

        return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        });
    }

    _clickCart(){
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }

    //addProduct() {                   //добавить товар

    //}
    //removeProduct() {                //удалить товар

    //}
    //changeProduct() {               // изменить товар

    //}
    
}

class ItemInBasket {
    
    renderBasket(product,img = 'img/3.jpg') {
        return  `<div class='cart-item data-id='${product.id_product}'>
                  <div class = 'cart-header cart-style'>
                  <img class="cartimg" src='${img}' alt='Some img'>
                  <p>${product.product_name}</p>
                  <p>${product.quantity}</p>
                  <p>${product.price}</p>
                  <p>${product.quantity * product.price}</p>
                  <button class='dlt-btn' data-id='${product.id_product}'>X</button>
                  </div>
                  </div>`                    
    }
}
new Basket();


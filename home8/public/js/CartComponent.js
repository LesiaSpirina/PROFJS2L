Vue.component('cart', {
    data() {
        return {
            showCart: false,
            cartItems: [],
            cartUrl: `/getToBasket.json`
           
        }
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el)
                }
            });
    },

    methods: {
        addProduct(product) {
            
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find ) {
                this.$parent.putJson(`/api/cart/${ product.id_product }/${product.product_name}`,  {quantity: 1})
                    .then(data => {
                        if (data.result ) {
                           find.quantity++;
                           
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`api/cart/${product.id_product}/${product.product_name}`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        
        remove(product) {
            if (product.quantity > 1) {
                this.$parent.putJson(`/api/cart/${ product.id_product}/${product.product_name}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--;
                        }
                    })
            } else {
                this.$parent.delJson(`/api/cart/${ product.id_product }/${product.product_name}`, product)
                .then(data => {
                    if (data.result) {
                        this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        } else {
                            console.log('error');
                        }
                    })
            }
        },
        
    },
    
    template:
    `<div >
        <button class="btn-cart1" type="button" @click = "showCart = !showCart">
            <img src="img/cart.png" alt="cart" />
        </button>        
        <div class="cart-box" v-show ="showCart">
            <h3> Корзина</h3><p class="cart-container-empty" v-if="cartItems.length === 0"> Корзина пуста</p>
                <div class="cart-block" >
                   <cart-single v-for="item of cartItems"
                   :key="item.id_product" :cart-item="item" :img="item.img_product"
                    @remove="remove" 
                    ></cart-single>
                    <div class="total-price">
                      <p class="total">TOTAL PRICE</p>
                      <p class="total">{{this.cartItems.reduce((sum, item) =>
                        sum + item.quantity * item.price,0) }}$</p>
                        
                    </div>
                </div>
            </div> 
           
        </div>  
    </div> `
}),

Vue.component('cart-single',{
    props: ['cartItem'],
    
    template:
    `
        <div class="cart-item">
          <div class="cart-photo">
              <a href="#">
                <div class="div-i">
                    <img class="cart-foto-img" style="width=100px"
                        :src="cartItem.img_cartproduct" alt="photo"
                    />
                </div
              ></a>
          </div>
          <div class="cart-photo-price">
                            
            <p class="rebox">{{cartItem.product_name}}</p>
            <p clas="rebox2">Количество: {{cartItem.quantity}}</p>
            
            <p class="price-cart">Цена за 1шт: {{cartItem.price}} $</p>
            <p class='cart-photo-price-total'><span>Итого:</span> <span>{{cartItem.quantity * cartItem.price}}$</span></p>
          </div>
          <button  class="button-reset" @click="$emit('remove', cartItem)">X
          </button>
        </div>
    `
})
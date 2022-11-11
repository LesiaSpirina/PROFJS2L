Vue.component('cart', {
    props: ['cart-items', 'img', 'visibility'],
    template : `
    <div class="cart-block" v-show="visibility" > 
       <cart-header></cart-header>     
       <cart-item v-for="item of cartItems" :key="item.id_product" :img='img' 
       :cart-item='item' ></cart-item>
    </div> `

});

Vue.component('cart-header', {
    template: `
            <div class="cart-header cart-style">
              <div>Товар</div>
              <div>Название товара</div>
              <div>Количество</div>
              <div>Цена за шт.</div>
              <div>Итого</div>
              <div></div>
            </div> `
});

Vue.component('cart-item', {
    props: ['img','cartItem'],
    template: `
       <div class="cart-item cart-header" >
            <img margin-right="20px" width='80px' height="100px" :src="img" alt="img">
            <p class="product-title">{{cartItem.product_name}}</p>
            <p class="product-quantity ">{{cartItem.quantity}}</p>
            <p class="single-price ">{{cartItem.price}}</p>
            <p class="total price ">{{cartItem.quantity * cartItem.price}}</p>
            <button class="dlt-btn" @click="$root.remove(cartItem)">X</button>
       </div> 
    `
})
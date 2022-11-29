Vue.component('products', {
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    

    template: `
    <section class="sec-item">
            <div class="container">
              <h2 class="item-heading">Fetured Items</h2>
              <p class="item-text">
                Shop for items based on what we featured in this week
              </p>
              <div class="card-box">
                 <product v-for="product of filtered" :key="product.id_product" :product="product"
                 @add-product="$parent.$refs.cart.addProduct"></product>
              </div>
              <div class="button-card">
                <a class="button card__button button_hover" href="#"
                  >Browse All Product <img src="img/arrow.png" alt="arrow"
                /></a>
              </div>
            </div>
          </section>
    `
}),

Vue.component('product', {
    props: ['product'],
    template: 
    `
       <div class="card">
            <a class="item-link" href="#">
                <img class="card-item-img" :src="product.img_product" alt="photo" />
                <div class="text-it">
                    <p class="card-text ct1">{{ product.product_name }}</p>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="red-word-card">{{ product.price }} $</p>
                </div>
            </a>
            <div class="add-box">
                <button class="add-card" @click="$root.$refs.cart.addProduct(product)">
                    <img class="add-img" src="img/whitecart.png" alt="cart" />
                    <p class="add-text">Add to Cart</p>
                </button>
            </div>
        </div>
    `
})
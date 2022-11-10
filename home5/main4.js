const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],//массив для товаров каталога
        cartItems: [],//массив для товаров корзины
        filtered: [],//массив отфильтрованных товаров в поисковике
        imgCatalog: 'img/3.jpg',//картинка товара в каталоге
        imgCart: 'img/3.jpg',//картинка товара в корзине
        userSearch: "",//поисковик-фильтр
        show: false//по умолчанию корзина скрыта
    },
    methods: {
        getJson(url) {
            return fetch()
               .then(result => result.json())
               .catch(error => {
                console.log(error);
            })
        },
        addProduct(item){
            this.getJson('${API}/addToBasket.json')
            .then(data => {
                if(data.result === 1) {
                    let findItem = this.cartItems.find(product => product.id_product === item.id_product);
                    if(findItem) {
                        findItem.quantity++;
                    } else {
                        const prodInBasket = this.$set(item, 'quantity', 1);
                        this.cartItems.push(prodInBasket)
                    }
                }
            })
        },   
        removeProduct(item){
            this.getJson('${API}/deleteFromBasket.json')
            .then(data => {
                if(data.result === 1) {
                    //let findItem = this.cartItems.find(product => product.id_product === item.id_product);
                    if(findItem.quantity > 1){
                        findItem.quantity--;
                    } else {
                        this.cartItems.splice(this.cartItems.indexOf(findItem),1);
                    }
                }   
            })
        },
        filter (){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
     },
     mounted (){
       
        this.getJson('${API + this.cartUrl}')
        .then(data => {
            for( let item of contents){
                this.cartItems.push(item);
            }
        })
        this.getJson('${API + this.catalogUrl}')
        .then(data => {
            for(let item of data){
                this.$data.products.push(item);
                this.$data.filtered.push(item);
            }
        })
        this.getJson('getProducts.json')
        .then(data => {
            for(let item of data) {
                this.products.push(item);
                this.filtered.push(item);
            }
        })
     }
});

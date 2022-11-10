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
        filter(){
         const regexp = new RegExp(this.userSearch, 'i');
         this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        getJson(url){
            return fetch(url)
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
    },   
    //  mounted (){
       
    //     this.getJson('${API + this.cartUrl}')
    //     .then(data => {
    //         for( let item of data.contents){
    //             this.cartItems.push(item);
    //         }
    //     })
    mounted(){
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for(let el of data){
                        this.products.push(el);
                    }
                });
             this.getJson(`getProducts.json`)
                 .then(data => {
                     for(let el of data){
                         this.products.push(el);
                     }
                 });
        }
    })
     


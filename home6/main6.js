const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        addUrl: '/addToBasket.json',
        deleteUrl: '/deleteFromBasket.json',
        products: [],
        cartItems: [],
        filtered: [],
        imgCatalog: 'img/1.jpg',
        imgCart: 'img/1.jpg',
        userSearch: '',
        show: false,
        error: false
    },
    methods: {
        async getJson(url){
            try {
                const result = await fetch(url);
                return await result.json();
            } catch (error) {
                console.log(error);
                this.error = true;
            }
        },
        addProduct(item){
                this.getJson(`${API + this.addUrl}`)
                .then(data => {
                    if (data.result === 1){
                        let findItem = this.cartItems.find(product =>
                             product.id_product === item.id_product);
                        if(findItem){
                            findItem.quantity++;
                        } else {
                           let itemCart = Object.assign(item,{quantity: 1});
                           this.cartItems.push(itemCart);
                        }
                    }

                })
        },
        remove(item){
            this.getJson( `${API + this.deleteUrl}`)
            .then(data => {
                if (data.result === 1) {
                    let itemF = this.cartItems.find(product =>
                        product.id_product === item.id_product);
                    if(itemF.quantity > 1){
                        itemF.quantity--;
                    } else {
                        this.cart.splice(this.cartItems.indexOf(itemF),1);
                    }   
                }
            })
        },
        filter(){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product =>
                regexp.test(product.product_name));
           },
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.$data.products.push(el);
                   this.$data.filtered.push(el);
              }
           });
    //    this.getJson(`getProducts.json`)
    //         .then(data => {
    //             for(let el of data){
    //                 this.products.push(el);
    //             }
    //         });
       this.getJson(`${API + this.cartUrl}`)  
            .then(data => {
                for(let el of data.contents) {
                    this.cartItems.push(el)
                }
            }) 
    }
})

     


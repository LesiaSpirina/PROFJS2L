Vue.component('header-leftdiv', {
    data(){
       return {
          showMenu: false,
        }
    },
    template:
       `
        <div class="header-left">
            <a class="logo-text1" href="index.html">
            <img class="logo" src="../img/logotip.png" alt="logo"/></a>
            <a class="logo-text" href="index.html">BRAN<span class="logo-text-red">D</span></a>
            <nav-dropdown-menu></nav-dropdown-menu>
            <filter-form></filter-form>
        </div>
       `
    })
Vue.component('nav-dropdown-menu', {
    template:`
    <details @click="$parent.showMenu = !$parent.showMenu">
        <summary class="browse">Browse</summary>
        <div class="dropdown-content" v-show="$parent.showMenu">
            <h3 class="droptext">WOMAN</h3>
            <a class="dropdown-link" href="#">Dresses</a>
            <a class="dropdown-link" href="#">Tops</a>
            <a class="dropdown-link" href="#">Sweaters/Knits</a>
            <a class="dropdown-link" href="#">Jackets/Coats</a>
            <a class="dropdown-link" href="#">Blazers</a>
            <h3 class="droptext">MAN</h3>
            <a class="dropdown-link" href="#">Dresses</a>
            <a class="dropdown-link" href="#">Tops</a>
            <a class="dropdown-link" href="#">Sweaters/Knits</a>
            <a class="dropdown-link" href="#">Jackets/Coats</a>
            <a class="dropdown-link" href="#">Blazers</a>
            <a class="dropdown-link" href="#">Denim</a>
            <a class="dropdown-link" href="#">Leggings/Pants</a>
            <a class="dropdown-link" href="#">Skirts/Shorts</a>
        </div>
    </details> `
})
Vue.component('filter-form', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: 
    `
    <div class="search-button">
        <form action="#" class="form-header" method="post" @submit.prevent="$root.$refs.products.filter(userSearch)">
            <input name="search" type="text" placeholder="Search for item....."
                class="search" v-model="userSearch"/>
            <button class="search2" type="submit">
               <img src="img/lupa.png" alt="search" />
            </button>
        </form>
    </div>
    `
})
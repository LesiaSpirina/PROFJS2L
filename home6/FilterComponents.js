Vue.component('filter-form', {
    
    template: `<form action="#" class="search-form" @submit.prevent="$parent.filter" >
    <input type="text" class="search-field" v-model="$parent.userSearch" />
    <button class="btn-search" type="submit">
     <i class="fa fa-light fa fa-magnifying-glass"></i>
    </button>
  </form> 
    `
})



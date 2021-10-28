<template>
  <lay-out>
    <!--Header Bar-->
    <template v-slot:headerBar>
      <header-bar title="Product Management" @log-out="logout"></header-bar>
    </template>
    <!--NavBar Bar-->
    <template v-slot:navBar>
      <nav-bar>
        <template v-slot:title>
          <h4><font-awesome-icon :icon="['fas','shopping-cart']" /> Product List</h4>
        </template>
        <template v-slot:search>
          <input type="text" class="form-control" v-model="searchData" @input="searchProduct"  placeholder="Search Product">
        </template>
        <template v-slot:button>
          <router-link to="/add" class="btn btn-primary button"><font-awesome-icon :icon="['fas','plus']" />  Add Product </router-link>
        </template>
      </nav-bar>
    </template>
    <!--Table-->
    <template v-slot:body>
      <filter-box
              @filter-price="filterPrice"
              @filter-quantity="filterQuantity">
      </filter-box>
      <table-data
              :products="products"
              @delete-product="deleteProduct">
      </table-data>
    </template>
  </lay-out>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import LayOut from "../components/LayOut";
  import NavBar from "../components/NavBar";
  import TableData from "../components/TableData";
  import FilterBox from "../components/FilterBox";

  import router from "../router";
  export default {
    name: 'Home',
    components: {
      HeaderBar,
      LayOut,
      NavBar,
      TableData,
      FilterBox
    },
    data(){
      return{
        searchData: '',
      }
    },
    mounted() {
      let user = localStorage.getItem('fake-token');
      if (!user){
        this.$router.push({name: 'Login'});
      }
      this.$store.dispatch('getProduct');
    },
    computed: {
      products(){
        return this.$store.getters.ProductList;
      }
    },
    methods:{
      // Logout
      logout(){
        localStorage.clear();
        // eslint-disable-next-line no-undef
        Toast.fire({
            icon: 'success',
            title: 'Logged out successfully'
        })
        this.$router.push({name: 'Login'});
      },
      // Search Product
      searchProduct(){
        this.$store.dispatch('searchProduct',{search: this.searchData});
      },
      // Filter Price
      filterPrice(minPrice,maxPrice){
        this.$store.dispatch('filterPrice',{minPrice:minPrice,maxPrice:maxPrice})
      },
      // Filter Quantity
      filterQuantity(minQuantity,maxQuantity){
        this.$store.dispatch('filterQuantity',{minQuantity:minQuantity,maxQuantity:maxQuantity})
      },
      //Delete Product
      deleteProduct(id){
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteProduct',{id: id});
            setTimeout(function () {
              router.go();
            },600);
          }
        });
      }
    }
}
</script>

<style scoped>

</style>

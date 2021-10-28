<template>
    <div class="col-xl-2 filter-box">
        <div class="range-box">
            <div class="range-title">
                <h6>Filter Quantity :</h6>
            </div>
            <div class="range-slider">
                <input type="range" class="form-range" min="0" max="1000" step="10" v-model.number="minQuantity" @change="filterQuantity">
                <input type="range" class="form-range" min="0" max="1000" step="10" v-model.number="maxQuantity"  @change="filterQuantity">
            </div>
            <div class="range-text">
                <span style="float: left">Min : {{minQuantity}}</span>
                <span style="float: right">Max : {{maxQuantity}}</span>
            </div>
        </div>
        <div class="range-box" style="margin-top: 20px">
            <div class="range-title">
                <h6>Filter Price :</h6>
            </div>
            <div class="range-slider">
                <input type="range" class="form-range" min="200" max="3000" step="10" v-model.number="minPrice" @change="filterPrice">
                <input type="range" class="form-range" min="200" max="3000" step="10" v-model.number="maxPrice" @change="filterPrice">
            </div>
            <div class="range-text">
                <span style="float: left">Min : {{minPrice + '$'}}</span>
                <span style="float: right">Max : {{maxPrice + '$'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterBox",
        data(){
            return{
                minPrice: 200,
                maxPrice: 3000,
                minQuantity : 0,
                maxQuantity : 1000,
            }
        },
        methods: {
            filterPrice(){
              this.$emit('filter-price',this.minPrice,this.maxPrice);
            },
            filterQuantity(){
                this.$emit('filter-quantity',this.minQuantity,this.maxQuantity);
            }
        }
    }
</script>

<style scoped>

</style>
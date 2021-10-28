<template>
    <div class="col-xl-10 p-0 float-end">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id" :class="{'highlight': product.quantity < 10}">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price +'$'}}</td>
                    <td v-if="product.quantity === 0" class="text-danger" style="font-weight: bold">Out of stock</td>
                    <td v-else>{{ product.quantity }}</td>
                    <td>
                        <div class="btn-group">
                            <router-link :to="'/edit/'+product.id" class="btn btn-primary" style="margin-right: 10px; background-color: #405b76;"><font-awesome-icon :icon="['fas','edit']" /></router-link>
                            <button @click="deleteProduct(product.id)" class="btn btn-danger"><font-awesome-icon :icon="['fas','trash']" /></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>


    export default {
        name: "TableData",
        props: {
            products:{required: true}
        },
        methods:{
            deleteProduct(id){
                this.$emit('delete-product',id);
            }
        }
    }
</script>

<style scoped>
</style>
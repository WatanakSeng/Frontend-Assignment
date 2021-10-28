<template>
    <lay-out>
        <!--Header Bar-->
        <template v-slot:headerBar>
            <header-bar title="Product Management"></header-bar>
        </template>
        <!--NavBar Bar-->
        <template v-slot:navBar>
            <nav-bar>
                <template v-slot:title>
                    <h4>Edit Product</h4>
                </template>
            </nav-bar>
        </template>
        <template v-slot:body>
            <div class="col-xl-12 p-0">
                <form class="user" @submit.prevent="updateProduct">
                    <div class="col-xl-6 float-start">
                        <div class="form-group" style="padding-right: 10px">
                            <label for="text">Name : </label>
                            <input type="text" class="form-control"  id="text" v-model="form.name"
                                   placeholder="Enter Name" :class="{ 'is-invalid': $v.form.name.$error, '': !$v.form.name.$error }">
                            <div v-if="$v.form.name.$error">
                                <p class="text-danger" v-if="!$v.form.name.required">Please insert name</p>
                            </div>
                        </div>
                        <div class="form-group" style="padding-right: 10px">
                            <label for="description">Description : </label>
                            <textarea class="form-control" id="description" v-model="form.description"
                                      placeholder="Enter Description" style="height: 125px"
                                      :class="{ 'is-invalid': $v.form.description.$error, '': !$v.form.description.$error }">>
                            </textarea>
                            <div v-if="$v.form.description.$error">
                                <p class="text-danger" v-if="!$v.form.description.required">Please insert description</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 float-end">
                        <div class="form-group" style="padding-left: 10px">
                            <label for="price">Price : </label>
                            <input type="text" class="form-control" id="price" v-model.number="form.price"
                                   placeholder="Enter Price"
                                   :class="{ 'is-invalid': $v.form.price.$error, '': !$v.form.price.$error }">
                            <div v-if="$v.form.price.$error">
                                <p class="text-danger" v-if="!$v.form.price.required">Please insert price</p>
                                <p class="text-danger" v-if="!$v.form.price.numeric">Price is only number</p>
                            </div>
                        </div>
                        <div class="form-group" style="padding-left: 10px">
                            <label for="quantity">Quantity : </label>
                            <input type="text" class="form-control" id="quantity" v-model.number="form.quantity"
                                   placeholder="Enter Quantity"
                                   :class="{ 'is-invalid': $v.form.quantity.$error, '': !$v.form.quantity.$error }">
                            <div v-if="$v.form.quantity.$error">
                                <p class="text-danger" v-if="!$v.form.quantity.required">Please insert quantity</p>
                                <p class="text-danger" v-if="!$v.form.quantity.numeric">Quantity is only number</p>
                            </div>
                        </div>
                        <div class="form-group" style="padding-left: 10px">
                            <label for="image">Image : </label>
                            <input type="file" class="form-control" id="image" ref="fileupload" @change="onFileSelected"
                                   :class="{ 'is-invalid': $v.form.image.$error, '': !$v.form.image.$error }">
                            <div v-if="$v.form.image.$error">
                                <p class="text-danger" v-if="!$v.form.image.required">Please select image</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 float-start">
                        <button type="submit" class="btn btn-primary btn-block button">Update <font-awesome-icon :icon="['fas','check']" /> </button>
                        <router-link to="/" class="btn btn-danger float-end"><font-awesome-icon :icon="['fas','backward']" /> Back</router-link>
                    </div>
                </form>
            </div>
        </template>
    </lay-out>
</template>

<script>
    import LayOut from "../../components/LayOut";
    import HeaderBar from "../../components/HeaderBar";
    import NavBar from "../../components/NavBar";
    import {numeric, required, requiredIf} from "vuelidate/lib/validators";
    export default {
        name: "EditForm",
        components: {
            LayOut,
            HeaderBar,
            NavBar
        },
        data(){
            return{
                id: 'null',
                form: {
                    name: '',
                    description: '',
                    price: null,
                    quantity: null,
                    image: null,
                },
                product: {}
            }
        },
        validations: {
            form: {
                name: {required},
                description: {required},
                price: {required, numeric},
                quantity: {required, numeric},
                image: {
                    required: requiredIf(function () {
                        return this.form.image === null; // New changes
                    })
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('fake-token');
            if (!user){
                this.$router.push({name: 'Login'});
            }
            this.id = this.$route.params.id;
            this.$store.dispatch("getProductDetail",{id: this.id,self : this});
            this.productDetail();
        },
        methods: {
            onFileSelected(){
                this.form.image = event.target.files[0].name;
            },
            productDetail(){
                this.product = this.$store.state.products;
                this.form = this.product;
            },
            updateProduct(){
                this.$v.$touch();
                const formData = {
                    id: this.id,
                    name: this.form.name,
                    description: this.form.description,
                    price: this.form.price,
                    quantity: this.form.quantity,
                    image: this.form.image
                }
                if (this.$v.$invalid) {
                    return false;
                } else {
                    this.$store.dispatch('updateProduct',formData);
                }
            }
        }
    }
</script>

<style scoped>
    label{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        margin-bottom: 10px;
    }
    input{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        margin-bottom: 15px;
    }
    button,a{
        margin-top: 10px;
        margin-left: 20px;
        width: 110px;
    }
</style>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="col-xl-5 shadow p-3 mb-5 bg-white rounded login-box card">
                    <div class="card-header">
                        <div class="text-center">
                            <h4 class="font-weight-bold">Login</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form class="user" @submit.prevent="login">
                            <div class="form-group">
                                <label for="email">Email : </label>
                                <input type="email" class="form-control"  id="email" v-model="email"
                                       placeholder="Enter Email" autocomplete="off"
                                       :class="{ 'is-invalid': $v.email.$error, '': !$v.email.$error  }">
                                <div v-if="$v.email.$error">
                                    <p class="text-danger" v-if="!$v.email.required">Email is required</p>
                                    <p class="text-danger" v-if="!$v.email.email">Please enter a valid email</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password : </label>
                                <input type="password" class="form-control" id="password" v-model="password"
                                       placeholder="Password"
                                       :class="{ 'is-invalid': $v.password.$error, '': !$v.password.$error  }">
                                <div v-if="$v.password.$error">
                                    <p class="text-danger" v-if="!$v.password.required">Password is required</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" style="margin-bottom: 20px" class="btn btn-primary btn-block button">Login</button>
                            </div>
                        </form>
                        <hr>
                        <div class="text-center" >
                            <router-link class="medium" to="/forgot">Forgot Password?</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        name: 'Home',
        mounted() {
            let user = localStorage.getItem('fake-token');
            if (user){
                this.$router.push({name: 'Home'});
            }
        },
        data(){
            return{
                email: null,
                password: null,
            }
        },
        methods: {
            async login(){
                this.$v.$touch();
                this.$store.dispatch('login',{email: this.email, password: this.password});
            }
        },
        validations: {
            email: {required, email},
            password: {required}
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
    button{
        width: 100%;
    }
</style>

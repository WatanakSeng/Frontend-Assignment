<template>
    <nav class="navbar navbar-expand-lg navbar-light header-background">
        <div class="col-xl-1">

        </div>
        <div class="col-xl-10 float-end">
            <h2>{{ title }}</h2>
        </div>
        <div class="col-xl-1 float-end">
            <button @click="logout" class="btn btn-danger float-end">Log Out <font-awesome-icon :icon="['fas','sign-out-alt']" /></button>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        props:{
            title:{
                type: String,
                required: true
            }
        },
        methods: {
            logout(){
                this.$emit('log-out');
            },
        }
    }
</script>

<style scoped>
    h2{
        color: white;
        text-align: center;
    }
</style>
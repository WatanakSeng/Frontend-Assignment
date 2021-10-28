<template>
    <div class="container-fluid">
        <div class="row">
            <slot name="headerBar"></slot>
        </div>
        <div class="container p-0">
            <slot name="navBar"></slot>
            <div class="row">
                <div class="col-xl-12 p-0">
                    <slot name="body"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LayOut"
    }
</script>

<style scoped>

</style>
<template>
    <div class="row">
        <div class="col-xl 12 button-bar">
            <div class="col-xl-4 p-0 float-start">
                <slot name="title"></slot>
            </div>
            <div class="col-xl-4 p-0 float-start">
                <slot name="search"></slot>
            </div>
            <div class="col-xl-4 p-0 float-end">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style scoped>
</style>

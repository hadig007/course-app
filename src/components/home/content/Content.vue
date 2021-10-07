<template>
    <div>
        <div class="content">
            <h1>Content</h1>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h1{
    text-align: center;
    background-color: rgb(255, 181, 255);
}
.content{
    text-align: center;
}
</style>